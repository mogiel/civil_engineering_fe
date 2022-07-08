import React from "react";
import {FireProtectionInterface} from "types";

interface Props {
    info: FireProtectionInterface
}

export const InfoResult = (props: Props) => {
    const {classBuilding, main, roof, ceiling, exteriorWall, internalWall, cover} = props.info

    return (<>
            <h4>Kategoria budynku: <strong>{classBuilding}</strong></h4>
            <p>Główna konstrukcja nośna: <strong>{main}</strong></p>
            <p>Konstrukcja dachu: <strong>{roof}</strong></p>
            <p>Strop ((1)*): <strong>{ceiling}</strong></p>
            <p>Ściana zewnętrzna(1., 2.): <strong>{exteriorWall}</strong></p>
            <p>Ściana wewnętrzna(1.): <strong>{internalWall}</strong></p>
            <p>Przekrycie dachu(3.): <strong>{cover}</strong></p>
            <p>Przekrycie dachu(3.): <strong>{cover}</strong></p>
            <br/>
            <p>Klasa odporności ogniowej elementów budynku (5., (*))</p>
        </>
    )
}
