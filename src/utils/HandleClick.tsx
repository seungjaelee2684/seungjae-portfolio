const HandleClick = ({...props} : any) => {
    const { ref, setHandle } = props;
    
    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setHandle;
        };
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
        document.removeEventListener("click", handleClickOutside);
    };
};

export default HandleClick;