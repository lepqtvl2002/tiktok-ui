import { useState } from "react";
import images from "~/assets/images";

function Image(props) {
    const [fallback, setFallback] = useState(props.src);

    function handelError() {
        setFallback(images.no_img);
    }

    return <img {...props} src={fallback} onError={handelError} />;
}

export default Image;
