import React from "react";
import {Link, Text} from "@chakra-ui/react";

export const MainView = () => {

    return (
        <>
            <Text fontSize={'xl'}>Od projektanta dla projektanta</Text>
            <Text>Strona stworzona jako demonstracja umiejętności. W zakładce "Ochrona pożarowa" znajduje się kalkulator
                do wyznaczania odporności przegród budowlanych. Wszelkie dane pochodzą z backend, który łączy sie z bazą
                danych. Obliczenia pozostają po stronie frontend.
            <br/>
                <strong>Frontend</strong> został utworzony przy pomocy biblioteki "React", "Chakra UI" oraz "styled-components". <br/>
                <strong>Backend</strong> oparty nest na NestJS. Technologie użyte: TypeORM, passport<br/>
                <strong>Baza danych</strong> na systemie MySQL <br/>
            </Text><br/>
            <Text>Całość kodu dostępna na platformie github:</Text>
            <Link color={"teal.500"} href={'https://github.com/mogiel/civil_engineering_be'}>Kod Backend</Link><br/>
            <Link color={"teal.500"} href={'https://github.com/mogiel/civil_engineering_fe'}>Kod Frontend</Link>
            <br/><br/>
            Niestety nie udało mi się poprawnie zaimplementować logowania przy wymianie miedzy backendem a frontendem.
            Backend działa podczas sprawdzeń programem "postman". Ale pozostawiłem te funkcjonalność, ponieważ spędziłem
            nad tym zagadnieniem pare dni. Logowanie działa na zasadzie przekazania i wyświetleniu tokenu na
            stronie(Niebezpieczne zachowanie) i wklejenie do w zakładce
        </>
    )
}