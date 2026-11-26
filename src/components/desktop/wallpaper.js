// Desktop wallpaper: 'clouds' (the default) or 'none' for the plain teal
// desktop. index.html applies the saved choice before the app loads.
const STORAGE_KEY = 'wallpaper'

export function toggleWallpaper () {
  const root = document.documentElement
  const next = root.dataset.wallpaper === 'none' ? 'clouds' : 'none'
  root.dataset.wallpaper = next
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Storage blocked (private mode etc.): the change still applies until reload
  }
}
