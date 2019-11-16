async function getComponent() {
    const element = document.createElement('div');
    const {default: _} = await import(/* webpackChunkName: "lodash" */ 'lodash');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

// Loads component and import lodash after 1s
setTimeout(() => {
    getComponent().then(component => {
        document.body.appendChild(component);
    });
}, 1000);
