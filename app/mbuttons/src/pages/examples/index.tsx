import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import buttons from '../../data/buttons.json'
import ButtonExample from '../../components/ButtonExample'
import Sidebar from '../../components/Sidebar'
import SidebarLink from '../../components/SidebarLink'

interface ButtonObjPropsType {
  button: {
    classes: string
    label?: string
    html: string
    htmlContent?: string
    text: string
    title: string
    variations:
    | []
    | {
      classes: string
      label: string
      html: string
      text: string
    }[]
  }
  html?: string
  type: {
    name: string
    shouldHaveBlockType: boolean
    shouldHaveRoundedType: boolean
    usesColors?: boolean
    usesText?: boolean
  }
}

interface ButtonsJSONType {
  children?: any
  classes: string
  label: string
  html?: string
  text?: string
  type?: string
  shouldHaveRoundedType?: boolean
  shouldHaveBlockType?: boolean
  usesColors?: boolean
  usesText?: boolean
  variations?:
  | []
  | {
    classes: string
    label: string
    html: string
    text: string
  }[]
}

function Examples() {
  const [currentButton, setCurrentButton] = useState<string | null>(null)
  const [sidebarLinks, setSidebarLinks] = useState<JSX.Element[]>([])

  useEffect(() => {
    if (window.location.hash) {
      setCurrentButton(window.location.hash)
    } else {
      if (buttons.length) {
        if (buttons[0].children.length) {
          setCurrentButton('#' + buttons[0].children[0].type)
        } else {
          setCurrentButton('#' + buttons[0].type)
        }
      }
    }

    buttons.forEach((buttonType, index) => {
      if (!buttonType.children.length) {
        setSidebarLinks(() => [
          <SidebarLink
            to={`#${buttonType.type}`}
            text={buttonType.label}
            key={`${buttonType.type}_${index}`}
            clickCallback={setCurrentButton}
            current={currentButton}
          />,
        ])
      } else {
        setSidebarLinks((sidebarLinks) => [
          ...sidebarLinks,
          <SidebarLink
            text={buttonType.label}
            key={`${buttonType.type}_${index}`}
          />,
        ])

        buttonType.children.forEach((button, buttonIndex) => {
          setSidebarLinks((sidebarLinks) => [
            ...sidebarLinks,

            <SidebarLink
              to={`#${button.type}`}
              text={button.label}
              level={1}
              key={`${index}_${buttonIndex}`}
              clickCallback={setCurrentButton}
              current={currentButton}
            />,
          ])
        })
      }
    })
  }, [])

  let buttonProps: ButtonObjPropsType = {
    button: {
      classes: '',
      label: undefined,
      html: '',
      htmlContent: undefined,
      text: '',
      title: '',
      variations: [],
    },
    type: {
      name: '',
      shouldHaveBlockType: false,
      shouldHaveRoundedType: false,
      usesColors: undefined,
      usesText: undefined,
    },
  }

  if (currentButton) {
    const type = currentButton.replace('#', '')
    buttons.some((buttonType: ButtonsJSONType) => {
      if (buttonType.type === type) {
        buttonProps = {
          button: {
            title: buttonType.label,
            classes: buttonType.classes,
            variations: buttonType.variations ? buttonType.variations : [],
            html: buttonType.html !== undefined ? buttonType.html : '',
            text: buttonType.text !== undefined ? buttonType.text : '',
          },
          type: {
            name: buttonType.label,
            shouldHaveRoundedType:
              buttonType.shouldHaveRoundedType !== undefined
                ? buttonType.shouldHaveRoundedType
                : true,
            shouldHaveBlockType:
              buttonType.shouldHaveBlockType !== undefined
                ? buttonType.shouldHaveBlockType
                : true,
            usesColors: buttonType.usesColors,
          },
        }
        return true
      } else {
        return buttonType.children.some((buttonChild: ButtonsJSONType) => {
          if (buttonChild.type === type) {
            buttonProps = {
              button: {
                title: buttonChild.label,
                classes: buttonType.classes + ' ' + buttonChild.classes,
                variations: buttonChild.variations
                  ? buttonChild.variations
                  : [],
                html: buttonType.html !== undefined ? buttonType.html : '',
                text: buttonChild.text !== undefined ? buttonChild.text : '',
              },
              type: {
                name: buttonType.label,
                shouldHaveRoundedType:
                  buttonChild.shouldHaveRoundedType !== undefined
                    ? buttonChild.shouldHaveRoundedType
                    : true,
                shouldHaveBlockType:
                  buttonChild.shouldHaveBlockType !== undefined
                    ? buttonChild.shouldHaveBlockType
                    : true,
                usesColors: buttonChild.usesColors,
                usesText: buttonChild.usesText,
              },
            }
            return true
          }
          return false
        })
      }
    })
  }

  const hasVariations =
    buttonProps &&
    buttonProps.button.variations &&
    buttonProps.button.variations.length >= 1

  return (
    <div className="examples">
      <div className="flex mt-5">
        <Sidebar>{sidebarLinks}</Sidebar>
        <div className="container content lg:pr-20 md:w-8/12 pl-3">
          <h1 className="text-4xl md:text-left text-center">
            {buttonProps && buttonProps.button.title}
          </h1>
          <span className="mb-7 text-sm block md:text-left text-center">
            Type: {buttonProps && buttonProps.type.name}
          </span>
          {hasVariations &&
            buttonProps.button.variations.map((variation, index) => (
              <ButtonExample
                button={{
                  classes: `${buttonProps.button.classes} ${variation.classes}`,
                  htmlContent: variation.html,
                  label: variation.label,
                  text: variation.text,
                }}
                type={buttonProps.type}
                key={index}
              />
            ))}
          {buttonProps && !hasVariations && (
            <ButtonExample
              button={buttonProps.button}
              type={buttonProps.type}
              htmlContent={buttonProps.html}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Examples
