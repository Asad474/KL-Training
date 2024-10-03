const About = () => {
    return (
        <>
            <h1>Working of React</h1>

            <p>
                React creates a VIRTUAL DOM in memory.
                Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.        
                React only changes what needs to be changed!
                React finds out what changes have been made, and changes only what needs to be changed.
            </p>
        </>
    )
}

export default About;