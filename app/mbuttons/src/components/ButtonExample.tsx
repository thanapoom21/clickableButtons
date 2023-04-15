import React from 'react'
import ButtonSection from './ButtonSection'

function ButtonExample({
  button: { classes = '', htmlContent = '', label = '', text = '' },
  type: { shouldHaveRoundedType, shouldHaveBlockType, usesColors, usesText },
}: {
  button: {
    classes: string
    htmlContent?: string
    label?: string
    text: string
  }
  type: {
    name: string
    shouldHaveRoundedType: boolean
    shouldHaveBlockType: boolean
    usesColors?: boolean
    usesText?: boolean
  }
  htmlContent?: string
}) {
  return (
    <div className="button-example-container">
      {label.length >= 1 && <h2 className="mb-3 text-3xl mt-3">{label}</h2>}
      <div>
        <ButtonSection
          title="Basic"
          text={text.length ? text : 'Basic'}
          classes={classes}
          usesColors={usesColors}
          usesText={usesText}
          htmlContent={htmlContent}
        />
        {shouldHaveRoundedType && (
          <ButtonSection
            title="Rounded"
            text={text.length ? text : 'Rounded'}
            classes={`${classes} rounded-btn`}
            usesColors={usesColors}
            usesText={usesText}
            htmlContent={htmlContent}
          />
        )}
        {shouldHaveBlockType && (
          <ButtonSection
            title="Block"
            text={text.length ? text : 'Block'}
            classes={`${classes} block-btn`}
            usesColors={usesColors}
            usesText={usesText}
            htmlContent={htmlContent}
          />
        )}
      </div>
    </div>
  )
}

export default ButtonExample
