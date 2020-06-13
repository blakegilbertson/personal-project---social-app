export const loadState = () => {
    console.log('loadState() running');
    try {
        const serializedSate = localStorage.getItem('socialAppState')
        if (serializedSate === null) return undefined

        return JSON.parse(serializedSate)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state) => {
    console.log('saveState() running');
    try {
        const serializedSate = JSON.stringify(state)
        localStorage.setItem('socialAppState', serializedSate)
    } catch (err) {
        // ignore write errors
    }
}