import React from 'react'
import Input from './Input'
import Draggable, { DraggableCore } from 'react-draggable'

import { useEffect } from "react";
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'
// import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
// import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js'
import gjsForms from 'grapesjs-plugin-forms'
import plugin from 'grapesjs-preset-webpage'

export default function Admin() {

    useEffect(() => {
        grapesjs.init({
            container: '#gjs',
            height: '700px',
            width: '100%',
            plugins: [gjsForms,plugin],
            storageManager: {
                id: 'gjs-',
                type: 'local',
                autosave: true,
                storeComponents: true,
                storeStyles: true,
                storeHtml: true,
                storeCss: true,
            },
            deviceManager: {
                devices:
                    [
                        {
                            id: 'desktop',
                            name: 'Desktop',
                            width: '',
                        },
                        {
                            id: 'tablet',
                            name: 'Tablet',
                            width: '768px',
                            widthMedia: '992px',
                        },
                        {
                            id: 'mobilePortrait',
                            name: 'Mobile portrait',
                            width: '320px',
                            widthMedia: '575px',
                        },
                    ]
            },
            pluginsOpts: {
                [gjsForms]: {
                    blocksBasicOpts: {
                        blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video'],
                        flexGrid: 1,
                    },
                    blocks: ['form','input','textarea','select','button','label','checkbox','radio'],
                },
            }
        })
    }, [])


    return (
        <div id='gjs'>

        </div>
    )
}
