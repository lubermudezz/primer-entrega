export const Card = ({itemData}) => {
    return (
        <div style ={{border: 'solid blue 3px', margin: '10px'}}>
            <strong>Nombre del mapa: {itemData.name}</strong>
            <div>Tamaño del mapa: {itemData.tamaño}</div>
        </div>
    )

};