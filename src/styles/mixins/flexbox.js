/**
 * flexbox
 *
 * @returns {string}
 */
export const flexbox = ()=>  {
  return `display: flex;`;
}

/**
 * justity content
 *
 * @param align
 * @returns {string}
 */
export const justifyContent = ( align )=> {
  // fall back align to inherit
  if (!align) {
    align = 'inherit'
  }
  return `justify-content: ${ align }`
}

/**
 * align items
 *
 * @param align
 * @returns {string}
 */

export const alignItems = ( align )=> {
  // fall back align to inherit
  if (!align) {
    align = 'inherit'
  }
  return `align-items: ${ align }`
}

/**
 * flex wraps
 *
 * Value => nowrap|wrap|wrap-reverse|initial|inherit
 *
 * @param value
 * @returns {string}
 */
export const flexWraps = ( value )=> {
  if (!value) {
    value = 'inherit'
  }
  return `flex-wrap: ${ value }`
}

/**
 * flex
 *
 * @param value
 * @returns {string}
 */
export const flex = ( value )=> {
  return `flex: ${value}`
}

/**
 *  flex direction
 *
 * @param value
 * @returns {string}
 */
export const flexDirection = ( value )=> {
  return `flex-direction: ${ value }`
}
