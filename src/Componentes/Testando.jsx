
export default function Dados({ nome, idade, cargo, imagem }) {
    return (
        <>
            <div class="containerbody">
                <div class="card mx-4" style={{ width: "300px" }}>
                <img src={imagem} alt="nome" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title positionTextCard">{nome}</h5>
                    <h5 class="card-title positionTextCard">{idade}</h5>
                    <h5 class="card-text positionTextCard">{cargo}</h5>
                </div>
            </div>
        </div >
            
        </>
    )
}