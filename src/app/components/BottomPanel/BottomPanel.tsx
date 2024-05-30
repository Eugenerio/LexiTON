import React from 'react';
import styles from './BottomPanel.module.css';

function BottomPanel() {
    return (
        <div className={`h-16 w-full absolute bottom-0 ${styles.background} py-4`}>
            <div className="flex justify-evenly w-full h-full">
                <div className="w-8 bg-red-800"></div>
                <div className="w-8 bg-red-800"></div>
                <div className="w-8 bg-red-800"></div>
            </div>
        </div>
    );
}

export default BottomPanel;
