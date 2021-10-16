import {useDrag} from '@use-gesture/react'
import React from "react";

interface SwipedComponentProps {
    endPosition: { x: string | number, y: string | number }
}

export const SwipedComponent: React.FC<SwipedComponentProps> = ({children}) => {
    const bind = useDrag(
        ({last, velocity: [, vy], direction: [, dy], movement: [, my], cancel, canceled}) => {
            // if the user drags up passed a threshold, then we cancel
            // the drag so that the sheet resets to its open position
            console.log({
                vy,
                dy,
                my,
            })
            if (my < -1) {
                cancel();
            }

            // when the user releases the sheet, we check whether it passed
            // the threshold for it to close, or if we reset it to its open positino
            // if (last) {
            //     my > height * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : open({ canceled })
            // }

            // when the user keeps dragging, we just move the sheet according to
            // the cursor position


            // else api.start({ y: my, immediate: true })
        }
        //, { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
    );

    return <div {...bind()}>{children}</div>;
}