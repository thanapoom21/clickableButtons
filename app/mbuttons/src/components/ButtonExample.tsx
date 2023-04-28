import React from 'react'
import ButtonSection from './ButtonSection'

interface IButton {
  label?: string
  classes: string
  variations?: {}[]
  text?: string
  htmlContent?: string
  title?: string
}

interface IType {
  name: string
  shouldHaveRoundedType?: boolean
  shouldHaveBlockType?: boolean
  usesColors?: boolean
  usesText?: boolean
}

function ButtonExample({
  button: { classes, text, htmlContent, label = '', title },
  type: { shouldHaveRoundedType, shouldHaveBlockType, usesColors, usesText },
}: {
  button: IButton
  type: IType
  htmlContent?: string
}) {
  return (
    <div className="button-example-container">
      {label.length >= 1 && <h2 className="mb-3 text-3xl mt-3">{label}</h2>}
      <div>
        <ButtonSection
          title="Basic"
          text={text?.length ? text : 'Basic'}
          classes={classes}
          usesColors={usesColors}
          usesText={usesText}
          htmlContent={htmlContent}
        />
        {shouldHaveRoundedType && (
          <ButtonSection
            title="Rounded"
            text={text?.length ? text : 'Rounded'}
            classes={`${classes} rounded-btn`}
            usesColors={usesColors}
            usesText={usesText}
            htmlContent={htmlContent}
          />
        )}
        {shouldHaveBlockType && (
          <ButtonSection
            title="Block"
            text={text?.length ? text : 'Block'}
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
