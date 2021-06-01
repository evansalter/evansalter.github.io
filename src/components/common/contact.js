const contactInfo = [
  { icon: 'github', scale: '2', display: 'evansalter', name: 'GitHub', url: 'https://github.com/evansalter/' },
  { icon: 'linkedin', scale: '2', display: 'evansalter', name: 'LinkedIn', url: 'https://www.linkedin.com/in/evansalter/' },
  { icon: 'twitter', scale: '2', display: '@_evansalter', name: 'Twitter', url: 'https://twitter.com/_evansalter' },
  { icon: 'codepen', scale: '2', display: 'esalter-va', name: 'Codepen', url: 'https://codepen.io/esalter-va/' },
  { icon: 'envelope', scale: '1.7', display: 'evan@evansalter.com', name: 'Email', url: 'mailto:evan@evansalter.com', newTab: false }
]

const contactInfoDict = contactInfo.reduce((acc, info) => {
  acc[info.name] = info
  return acc
}, {})

export default contactInfo

export function getContactInfo (name) {
  return contactInfoDict[name]
}
