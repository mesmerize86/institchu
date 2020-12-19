const size = {
  xsmallMin: '0px',
  smallMin: '575.98px',
  mediumMin: '767.98px',
  largeMin: '991.98px',
  xlargeMin: '1198.98px',

  smallMax: '576px',
  mediumMax: '768px',
  largeMax: '992px',
  xlargeMax: '1200px'
}

export const breakpoints = {
  smallUp: `(min-width: ${size.smallMax})`,
  smallBelow: `(max-width: ${size.mediumMin})`,
  mediumUp: `(min-width: ${size.mediumMax})`,
  mediumBelow: `(max-width: ${size.largeMin})`,
  largeUp: `(min-width: ${size.largeMax})`,
  largeBelow: `(max-width: ${size.xlargeMin})`,
  xlargeUp: `(min-width: ${size.xlargeMax})`
};