import * as diff from 'diff'
import PropTypes from 'prop-types'
window.Diff = diff

const styles = {
  added: {
    color: 'green',
    backgroundColor: '#b5efdb',
  },
  removed: {
    color: 'red',
    backgroundColor: '#fec4c0',
    textDecoration: 'line-through',
  },
}

const Diff = ({ string1 = '', string2 = '', mode = 'characters' }) => {
  let groups: diff.Change[] = []

  if (mode === 'characters')
    groups = diff.diffChars(AutoNewLIne(string1), AutoNewLIne(string2))
  if (mode === 'words')
    groups = diff.diffWordsWithSpace(AutoNewLIne(string1), AutoNewLIne(string2))

  const mappedNodes = groups.map((group) => {
    const { value, added, removed } = group
    let nodeStyles
    if (added) nodeStyles = styles.added
    if (removed) nodeStyles = styles.removed
    return <span style={nodeStyles}>{value}</span>
  })

  return <span style={{ whiteSpace: 'pre-line' }}>{mappedNodes}</span>
}

Diff.propTypes = {
  string1: PropTypes.string,
  string2: PropTypes.string,
  mode: PropTypes.oneOf(['characters', 'words']),
}

const AutoNewLIne = (text: string): string => {
  let replaced = text
    .replace(/\./g, '.\n')
    .replace(/\n\s+/g, '\n')
    .replace(/(\s){2,}/g, '\s')
    .replace(/'/g, '’')
    .replace(/(\n){2,}/g, '\n')
  return replaced
}

export default Diff
