import ContentLoader from "react-content-loader"

const ProductCardPreloader = () => {
    return (
        <ContentLoader
            speed={2}
            width={320}
            height={375}
            viewBox="0 0 320 375"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="5" y="3" rx="3" ry="3" width="300" height="230"/>
            <rect x="24" y="250" rx="0" ry="0" width="263" height="9"/>
            <rect x="122" y="272" rx="0" ry="0" width="65" height="9"/>
            <rect x="88" y="296" rx="20" ry="20" width="135" height="41"/>
        </ContentLoader>
    )
}

export {ProductCardPreloader}
