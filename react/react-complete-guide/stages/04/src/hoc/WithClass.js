import React from 'react';

const withClass = (props) => {
    return <div className = {props.classes}>
        {props.children}
    </div>
}

export default withClass;

/**
 * This is another way to expose HOC(Higher Order Component)
 * @param {*} WrappedComponent : child component that should be bundeled inside this component 
 * @param {*} classes : list of class that should be applied to WrappedComponent
 * 
 * 
 * Call this function like this:
 * import withClass
 * .....
 * define childComponent here
 * .....
 * export withClass(childComponent, classes); 
 */
export const WithClass = (WrappedComponent, classes) =>{
    const WithClass1 = (props) => (
        <div className = {classes}>
            <WrappedComponent ref = {props.forwardRef} {...props}/>
        </div>
    );

    //React forwardRef
    return React.forwardRef((props, ref) =>{
        return <WithClass1 {...props} forwardRef={ref}/>
    });
}

//Yet another way to implete it. Statefull component
export const withClassUsingStatefulComponent = (WrappedComponent, classes) =>{
    return class extends React.Component {
        render(){
           return <div className={classes}>
                <WrappedComponent {...this.props} />
            </div>
        }
    }
}