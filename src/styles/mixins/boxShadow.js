/**
 *
 * @param horizontal
 * @param vertical
 * @param blurRadius
 * @param spreadRadius
 * @param shadowColor
 * @param opacity
 * @param inset
 * @returns {string}
 */
export const boxShadow = (horizontal, vertical, blurRadius, spreadRadius, shadowColor, opacity, inset= false) => {
  return `box-shadow: ${horizontal} ${vertical} ${blurRadius} ${spreadRadius} rgba(${shadowColor}, ${opacity})`;

}