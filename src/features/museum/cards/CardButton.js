import './styles.css';

/* 
 * CardButton is a reusable component that we can use to render some dynamic
 * buttons. The fill colors and button backgrounds default to black and white,
 * respectfully.
 * 
 * This file is feature-complete, but you'll need to apply CSS to the elements
 * here in order to make them match the design.
 * 
 * This file's learning goals:
 * - Ternary operators
 * - CSS styling
 * 
 * Props:
 * ButtonSvg - the SVG component you want the button to show
 * buttonAction - a function to be called when the button is clicked
 * buttonFillColorActive - the color of the icon when the button is in an active state, defaults to black
 * buttonFillColorInactive - the color of the icon when the button is in an inactive state, defaults to black
 * buttonBgActive - the background color for the button when the button is in an active state, defaults to white
 * buttonBgInactive - the background color for the button when the button is in an inactive state, defaults to white
 * isActive - boolean value that determines which color scheme to use
 *  
 */

// We can use object destructuring to pull out the props we want by name!
export const CardButton = ({ 
    ButtonSvg, 
    buttonAction,
    buttonFillColorActive = 'black',
    buttonFillColorInactive = 'black',
    buttonBgActive = 'white',
    buttonBgInactive = 'white',
    isActive = false
}) => {

    return (
        /* this block is safe to remove
         *
         * What's this "?" and ":" syntax? This is called a "ternary" operator. If the thing
         * on the left side of the "?" is true, choose the thing right after the "?".  Otherwise,
         * choose the thing right after the ":". Here, we use it to swap between styles of the
         * button based on whether or not it's active, if it has an active state.
         * 
         * Also, do note that React StyleSheets use camelCase naming conventions rather than
         * traditional CSS snake-case!  This is to avoid name collisions with regular CSS.
         * In this button's style prop, you'll notice that in CSS, the property is called
         * background-color and in React StyleSheets, it's backgroundColor.
         * 
         */
        <button 
            onClick={buttonAction} 
            style={{ backgroundColor: isActive ? buttonBgActive : buttonBgInactive }}
        >
            <ButtonSvg 
                fill={isActive ? buttonFillColorActive : buttonFillColorInactive} 
                stroke={isActive ? buttonFillColorActive : buttonFillColorInactive}
            />
        </button>
    );
}