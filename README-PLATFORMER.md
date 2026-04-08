# Platformer notes

## Актуальная система тайлов

Теперь в проекте используется более привычная для платформеров схема автотайлинга по соседям:

### Базовые верхние/боковые тайлы земли
- `ground-left.png`
- `ground-middle.png`
- `ground-right.png`
- `ground-center.png`

### Плавающие одиночные верхние платформы
- `ground-floating-left.png`
- `ground-floating-middle.png`
- `ground-floating-right.png`

### Верхние угловые стыки для красивого соединения с более широкой землёй ниже
- `ground-corner-left.png`
- `ground-corner-right.png`

### Нижние тайлы для объёмного острова / нижней кромки
- `ground-bottom-single.png`
- `ground-bottom-left.png`
- `ground-bottom-middle.png`
- `ground-bottom-right.png`
- `ground-bottom-corner-left.png`
- `ground-bottom-corner-right.png`

### Отдельный overlay травы
- `grass-overlay-single.png`
- `grass-overlay-left.png`
- `grass-overlay-middle.png`
- `grass-overlay-right.png`

Логика выбора тайлов теперь такая:

- если у блока нет земли сверху и снизу — это `ground-floating-*`;
- если у блока нет земли снизу, но есть сверху — это нижний тайл острова `ground-bottom-*`;
- если у такого нижнего тайла есть диагональный стык сверху слева или сверху справа, выбирается `ground-bottom-corner-*`;
- если блок полностью окружён землёй со всех четырёх сторон, используется `ground-center`;
- в остальных случаях используется базовое семейство `ground-*`;
- если у верхнего/бокового тайла есть стык с более широкой землёй по диагонали снизу, выбирается `ground-corner-left/right`;
- любой верхний блок (`нет тайла сверху`) дополнительно получает отдельный overlay травы;
- трава рисуется поверх блока со смещением `-15px`, тянется на всю ширину тайла и масштабируется из исходника `35x20`.

Это позволяет отдельно хранить базовую землю и отдельно траву, как обычно делают в tile-based платформерах: коллизия остаётся у блока земли, а верхний декоративный слой рисуется поверх.

# Platformer level 1 — как устроен шаблон

Я добавил в проект отдельную страницу `platformer.html` и вынес игру в папку `js/platformer/`.

## Что уже сделано

- фиксированная внутренняя игровая сцена `1920x1080`
- canvas-рендер с пиксельным масштабированием
- первый базовый уровень
- горизонтальный скролл уровня
- фон с параллаксом и повторением только по оси X
- меню паузы
- окно подтверждения для выхода к навигации и перехода к проекту
- окно обучения, которое показывается при входе в уровень и доступно повторно через меню паузы
- HUD с сердцами и патронами
- ближняя и дальняя атака игрока (E / Q)
- два типа врагов: ходячий и турель
- двигаемые коробки
- переключатель + ворота + сундук в конце уровня
- fallback-отрисовка: даже если изображения ещё не вставлены, игра всё равно запускается

---

## Главные файлы

### Страница
- `platformer.html` — сама страница уровня
- `css/platformer.css` — оформление страницы, модальных окон и масштаба экрана

### Логика
- `js/platformer/config.js` — общие настройки игры
- `js/platformer/levels.js` — данные уровней
- `js/platformer/assets.js` — загрузка изображений
- `js/platformer/game.js` — игровой цикл, физика, враги, меню, рендер

---

## Как открыть уровень

Сейчас кнопка `PROJECTS` на странице `navigation.html` уже ведёт на `platformer.html`.

Если захочешь поменять путь вручную, ищи в `navigation.html`:

```html
<a class="map-button map-button--projects" href="platformer.html">
```

---

## Куда вставлять свои картинки

Я создал папки-заготовки:

- `img/platformer/level-1/`
- `img/platformer/shared/ui/`
- `img/platformer/shared/player/`
- `img/platformer/shared/enemies/walker/`
- `img/platformer/shared/enemies/turret/`
- `img/platformer/shared/tiles/`
- `img/platformer/shared/pickups/`
- `img/platformer/shared/props/`

Если файла нет — игра использует встроенные простые пиксельные заглушки.

### Фон первого уровня
Положить сюда:

- `img/platformer/level-1/background.png`

Фон уже настроен на исходный размер `353x186` и масштабирование в коде.

### Кнопки интерфейса
Можно использовать твои основные UI-картинки сайта:

- `img/menu-button.png`
- `img/close-button.png`

### Сердца
Сейчас логика использует такие пути:

- `img/heart-image-full.png`
- `img/heart-image-half.png`
- `img/heart-image-empty.png`

То есть можно просто использовать те же иконки, что уже есть у тебя на resume.

### Пули HUD
Добавить:

- `img/platformer/shared/ui/bullet-full.png`
- `img/platformer/shared/ui/bullet-empty.png`

### Игрок
Если захочешь вставить свои кадры, используй такие имена:

#### idle
- `img/platformer/shared/player/idle-1.png`
- `img/platformer/shared/player/idle-2.png`

#### run
- `img/platformer/shared/player/run-1.png`
- `img/platformer/shared/player/run-2.png`
- `img/platformer/shared/player/run-3.png`
- `img/platformer/shared/player/run-4.png`

#### jump
- `img/platformer/shared/player/jump-1.png`

#### hurt
- `img/platformer/shared/player/hurt-1.png`
- `img/platformer/shared/player/hurt-2.png`
- `img/platformer/shared/player/hurt-3.png`
- `img/platformer/shared/player/hurt-4.png`
- `img/platformer/shared/player/hurt-5.png`

#### melee
- `img/platformer/shared/player/melee-1.png`
- `img/platformer/shared/player/melee-2.png`
- `img/platformer/shared/player/melee-3.png`
- `img/platformer/shared/player/melee-4.png`
- `img/platformer/shared/player/melee-5.png`

#### ranged
- `img/platformer/shared/player/ranged-1.png`
- `img/platformer/shared/player/ranged-2.png`
- `img/platformer/shared/player/ranged-3.png`
- `img/platformer/shared/player/ranged-4.png`
- `img/platformer/shared/player/ranged-5.png`

### Враг 1 — ходячий

#### idle
- `img/platformer/shared/enemies/walker/idle-1.png`
- `img/platformer/shared/enemies/walker/idle-2.png`

#### attack
- `img/platformer/shared/enemies/walker/attack-1.png`
- `img/platformer/shared/enemies/walker/attack-2.png`
- `img/platformer/shared/enemies/walker/attack-3.png`
- `img/platformer/shared/enemies/walker/attack-4.png`
- `img/platformer/shared/enemies/walker/attack-5.png`

### Враг 2 — турель

#### idle
- `img/platformer/shared/enemies/turret/idle-1.png`

#### attack
- `img/platformer/shared/enemies/turret/attack-1.png`
- `img/platformer/shared/enemies/turret/attack-2.png`
- `img/platformer/shared/enemies/turret/attack-3.png`
- `img/platformer/shared/enemies/turret/attack-4.png`
- `img/platformer/shared/enemies/turret/attack-5.png`

### Тайлы

В коде уже заложена автоматическая подстановка таких изображений:

- `ground-left.png`
- `ground-middle.png`
- `ground-right.png`
- `ground-center.png`
- `ground-floating-left.png`
- `ground-floating-middle.png`
- `ground-floating-right.png`
- `ground-corner-left.png`
- `ground-corner-right.png`
- `ground-bottom-single.png`
- `ground-bottom-left.png`
- `ground-bottom-middle.png`
- `ground-bottom-right.png`
- `ground-bottom-corner-left.png`
- `ground-bottom-corner-right.png`
- `grass-overlay-single.png`
- `grass-overlay-left.png`
- `grass-overlay-middle.png`
- `grass-overlay-right.png`

Положить сюда:

- `img/platformer/shared/tiles/ground-left.png`
- `img/platformer/shared/tiles/ground-middle.png`
- `img/platformer/shared/tiles/ground-right.png`
- `img/platformer/shared/tiles/ground-center.png`
- `img/platformer/shared/tiles/ground-floating-left.png`
- `img/platformer/shared/tiles/ground-floating-middle.png`
- `img/platformer/shared/tiles/ground-floating-right.png`
- `img/platformer/shared/tiles/ground-corner-left.png`
- `img/platformer/shared/tiles/ground-corner-right.png`
- `img/platformer/shared/tiles/ground-bottom-single.png`
- `img/platformer/shared/tiles/ground-bottom-left.png`
- `img/platformer/shared/tiles/ground-bottom-middle.png`
- `img/platformer/shared/tiles/ground-bottom-right.png`
- `img/platformer/shared/tiles/ground-bottom-corner-left.png`
- `img/platformer/shared/tiles/ground-bottom-corner-right.png`
- `img/platformer/shared/tiles/grass-overlay-single.png`
- `img/platformer/shared/tiles/grass-overlay-left.png`
- `img/platformer/shared/tiles/grass-overlay-middle.png`
- `img/platformer/shared/tiles/grass-overlay-right.png`

### Предметы и объекты

Добавить по желанию:

- `img/platformer/shared/pickups/heart-pickup.png`
- `img/platformer/shared/pickups/ammo-pickup.png`
- `img/platformer/shared/props/chest-closed.png`
- `img/platformer/shared/props/chest-open.png`
- `img/platformer/shared/props/switch-off.png`
- `img/platformer/shared/props/switch-on.png`
- `img/platformer/shared/props/gate-closed.png`
- `img/platformer/shared/props/gate-open.png`
- `img/platformer/shared/ui/tutorial-level-1.png`

---

## Где менять общие настройки игры

Файл: `js/platformer/config.js`

Там можно менять:

- размер внутренней сцены
- гравитацию
- скорость игрока
- скорость прыжка
- здоровье
- урон врагов
- количество патронов
- параметры камеры
- ссылки кнопок меню

### Самые важные поля

```js
links: {
  navigation: 'navigation.html',
  project: 'items.html'
}
```

Если кнопка `Перейти к проекту` должна вести на другую страницу кейса, поменяй `project`.

---

## Где менять сам уровень

Файл: `js/platformer/levels.js`

Там есть объект `LEVELS.level1`.

### 1. Длина уровня

Длина уровня задаётся количеством символов в строках `grid`.

Чем длиннее строка — тем длиннее уровень.

### 2. Высота уровня

Высота уровня задаётся количеством строк в `grid`.

Сейчас их 13.

### 3. Как работает grid

Сейчас используется такой символ:

- `G` — твёрдый тайл земли
- `.` — пустота

Пример:

```js
'......GGGG......'
```

Это значит, что в этой строке будет платформа из 4 блоков.

### 4. Почему тайлы автоматически становятся left / middle / right

В `game.js` игра сама смотрит:

- есть ли сосед слева
- есть ли сосед справа
- есть ли тайл сверху
- есть ли тайл снизу
- есть ли диагональные стыки сверху/снизу

И на основе этого выбирает нужное семейство:

- верхний одиночный или нависающий блок — `ground-floating-*`
- обычная земля с боковыми краями — `ground-*`
- внутренний полностью закрытый блок — `ground-center`
- верхний угловой стык с более широкой землёй ниже — `ground-corner-*`
- нижняя кромка объёмного острова — `ground-bottom-*`
- нижний угловой стык — `ground-bottom-corner-*`
- если сверху пусто, поверх дополнительно рисуется `grass-overlay-*`

То есть тебе не надо руками расставлять варианты тайлов.
Достаточно просто строить уровень через `G`.

---

## Как двигать объекты на уровне

В `levels.js` есть такие блоки:

```js
playerStart: { x: 1.8 * W, y: 15.2 * W },
boxes: [ ... ],
walkers: [ ... ],
turrets: [ ... ],
pickups: [ ... ],
switchPlate: { ... },
gate: { ... },
chest: { ... }
```

Здесь `W = tileSize`, то есть размер одного тайла.

Например:

```js
{ x: 10 * W, y: 15.1 * W }
```

означает: поставить объект примерно на 10-й тайл по X и на 15-й по Y.

Это удобно, потому что все объекты автоматически привязываются к сетке.

---

## Как сделать 2 и 3 уровень потом

Проще всего так:

1. В `levels.js` скопировать `level1`
2. создать `level2` и `level3`
3. заменить у них:
   - `background.image`
   - `grid`
   - врагов
   - коробки
   - предметы
   - сундук
4. при желании переключать уровни после открытия сундука

Сама архитектура уже к этому подготовлена: уровень вынесен в отдельный объект.

---

## Управление в текущей версии

- `A / D` или `← / →` — идти
- `Space` — прыжок
- `K` или левая кнопка мыши — ближняя атака
- `L` или правая кнопка мыши — дальняя атака
- `E` — открыть сундук
- `Esc` — меню

---

## Что я советую делать дальше

Лучший порядок такой:

1. вставить свой фон первого уровня
2. вставить тайлы
3. вставить спрайты игрока
4. вставить спрайты двух врагов
5. проверить размеры кадров
6. после этого уже делать 2 и 3 уровень на той же архитектуре

---

## Важное замечание

Так как ты убрала папку `img` из архива, я специально сделал систему так, чтобы страница была рабочей даже без ассетов.
То есть сейчас у тебя уже есть программная база уровня, а потом ты просто заменишь заглушки своими картинками.


## ВАЖНО ПРО ЗАПУСК

Если ты открываешь `platformer.html` напрямую двойным кликом (`file:///...`), игра может показывать только серый экран, потому что модульный JavaScript иногда не запускается корректно без локального сервера.

Запускай сайт через локальный сервер, например:

- VS Code + Live Server
- `python -m http.server` в корне проекта

Потом открывай сайт через `http://localhost:.../platformer.html`.


## Новые управляющие кнопки

- `E` — удар мечом
- `Q` — дальняя атака
- `F` — взаимодействие
- `C` или `Ctrl` — присесть / встать

## Кадры загрузки сайта

Если хочешь использовать свои 4 картинки загрузки `50x50`, положи их по путям:

- `img/site-loader/loader-1.png`
- `img/site-loader/loader-2.png`
- `img/site-loader/loader-3.png`
- `img/site-loader/loader-4.png`

Если этих файлов нет, сайт покажет встроенную пиксельную заглушку на чёрном фоне.

## Запуск без Live Server

Теперь `platformer.html` подключает игру через обычный файл `js/platformer/platformer.bundle.js`, поэтому уровень должен открываться не только через Live Server, но и при прямом запуске сайта обычным открытием `.html` файла в браузере.

Если какие-то изображения не подгрузятся, сама логика игры всё равно продолжит работать, потому что в проекте уже есть fallback-отрисовка.
