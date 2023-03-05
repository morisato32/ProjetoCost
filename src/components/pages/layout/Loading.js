import styles from "../layout/Loading.module.css"

import loading from "../../../img/loading-3.webp"

function Loading(){
    return(
        <div className={styles.loading_container}>
            <img className={loading} src={loading} alt="imagem de carregamento"/>
        </div>
    )
}

export default Loading;