Original Windows 95 icon bitmaps, copied from the `png` folder of
[`@react95/icons`](https://www.npmjs.com/package/@react95/icons) 2.14.0.
That package is MIT licensed, but the artwork itself is Microsoft's.

| File         | Source        |
| ------------ | ------------- |
| `computer`   | `Explorer100` |
| `folder`     | `Folder`      |
| `blog`       | `Write1`      |
| `notepad`    | `Notepad`     |
| `document`   | `Wordpad`     |
| `settings`   | `FolderSettings` |
| `mail`       | `Mail`        |
| `comments`   | `Textchat`    |
| `warning`    | `Warning`     |
| `start`      | `Logo`        |
| `tip`        | `Bulb`        |
| `shut-down`  | `Shell3228`   |
| `display`    | `Desk100`     |

`start`, `tip` and `shut-down` are 32px only. For `start`, the 16px `Logo` is a different icon (taskbar settings),
with a panel covering part of the flag.

`github` and `linkedin` aren't from that package: they were drawn for this site in
the same style (16-color palette, dithered fills, light from the top left). The
logos are trademarks of their owners.

`shut-down` is cropped from 32px to its 24px artwork, so it fills the same box as the
other icons.

`public/favicon.ico` holds `computer` at 16, 32 and 48px (`Explorer100` again), and
`public/apple-touch-icon.png` is the 32px one at 4x on the desktop teal.

Bitmaps vary in how much of their canvas they fill (`FolderFile` and `Settings`
are only about 24px of 32), so check a new icon next to the others.
