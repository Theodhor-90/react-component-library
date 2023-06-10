import React, { FC, createRef, useEffect, useState } from 'react'
import IconComponent from '../icon/IconComponent'

export type TAccordionElement = {
    title: string
    content: string | React.ReactNode
}

export interface IAccordionProps {
    id: string | number
    elements: TAccordionElement[]
    multiSelectable?: boolean
    color?: string
    activeIndex?: number
}

const Accordion: FC<IAccordionProps> = ({
    id,
    elements,
    multiSelectable = false,
    color = 'black',
    activeIndex,
}) => {
    const [tabControls, setTabControls] = useState([] as boolean[])
    const [tabRefs, setTabRefs] = useState([] as any[])

    const updateSingleTab = (index: number) => {
        const updatedTabs = tabControls.map((el, i) => (i === index ? !el : false))
        setTabControls(updatedTabs)
    }

    const updateMultipleTabs = (index: number) => {
        const updatedTabs = tabControls.map((el, i) => (i === index ? !el : el))
        setTabControls(updatedTabs)
    }

    const updateTabs = (index: number) => {
        multiSelectable ? updateMultipleTabs(index) : updateSingleTab(index)
    }

    const getPanelHeight: (ref: HTMLDivElement) => string = (ref) => {
        return ref.scrollHeight + 'px'
    }

    useEffect(() => {
        const newTabControls = [] as boolean[]
        elements.forEach((el) => {
            newTabControls.push(false)
        })
        if (activeIndex || activeIndex === 0) {
            newTabControls[activeIndex] = true
        }
        setTabControls(newTabControls)
        setTabRefs(() =>
            Array(elements.length)
                .fill(null)
                .map((_, i) => createRef())
        )
    }, [elements, multiSelectable])

    return (
        <div className='accordion-container'>
            {elements.map((el, index) => (
                <div
                    className={`accordion-element py-4 ${tabControls[index] && 'active'}`}
                    key={`acc-el-${id}-${index}`}
                >
                    <div className='d-flex justify-content-between align-items-center accordion-button'>
                        <div className='h6'>{el.title}</div>
                        <div
                            className='circle-animation open-closed'
                            onClick={() => updateTabs(index)}
                        >
                            <div className='accordion-icon plus'>
                                <IconComponent
                                    iconName='ControlsPlus'
                                    stroke={color}
                                />
                            </div>
                            <div className='accordion-icon minus'>
                                <IconComponent
                                    iconName='ControlsMinus'
                                    stroke={color}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        ref={tabRefs[index]}
                        className='accordion-panel'
                        style={{
                            maxHeight: `${
                                tabControls[index] ? getPanelHeight(tabRefs[index].current) : 0
                            }`,
                        }}
                    >
                        {el.content}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordion
