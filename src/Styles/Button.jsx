// @ts-nocheck

// import styles from './Button.module.css'; // with modules we cannot worry about name conflicts
function Button() {
    
    // Inline
    const styles = {
        backgroundColor: "hsl(200,100%,50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor:"pointer",
    }


    return (
        // <button className={styles.button}>Click Me</button> // using modules
        <button style={styles}>Click Me</button> // inline
    );
}
export default Button