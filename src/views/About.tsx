import {Button, UnorderedList, ListItem, Text} from '@chakra-ui/react'
import {FetchOperator} from "../utils/Fetch/Fetch";

export const AboutView = () => {

    const downloadFile = async (value: string) => {

        const data = await new FetchOperator('about/download')
        return await data.pdf(value)
    };

    return (<>
        <Text fontSize={'xl'}><strong>O mnie</strong></Text>
        <Text fontSize={'l'}>Skończyłem liceum o profilu zarządzania informacją, podczas nauki nauczyłem się wyszukiwania informacji oraz
            podstaw HTML. Na studia mój wybór padł na budownictwo, informatyka była druga w kolejności. Podczas studiów
            często
            posługiwałem się programami do pisania własnych skryptów obliczeniowych. Podczas pracy w biurze projektowym
            pracowałem w zespole, nabyłem <strong>umiejętności komunikatywności i rozwiązywania problemów</strong>. Podczas projektowania
            obiektów rozwijałem umiejętności analitycznego myślenia oraz konsekwencji wyborów. Podczas napotkania
            problemu
            analizowałem detale, aby nie popełnić podobnych w przyszłości. Mam doświadczenie w pracy z inwestorem oraz
            podwykonawcami. Dostosowałem skrypty w języku LIST dla używanych programów CAD. Podczas pracy zacząłem
            interesować się językiem <strong>Python oraz JS</strong>. Programowaniem hobbystycznie zajmowałem się od 2019 roku. Od
            początku
            2021r ukończyłem paru miesięczne bootcampy internetowe dotyczące podstaw języków programowania które ująłem
            poniżej.
        </Text>
        <br/>
        <UnorderedList>
            <ListItem><strong>Pystart.pl</strong> - Python, podstawy języka</ListItem>
            <ListItem><strong>SkumajBazy</strong> - SQL(Postgres) i MongoDB, podstawy baz danych</ListItem>
            <ListItem><strong>PyWWW</strong> - Python(Django), podstawy frameworka do tworzenia aplikacji internetowych</ListItem>
            <ListItem><strong>MegaK</strong> - JavaScript, podstawy JS, NodeJs, Express, TS, React, SQL, NestJS</ListItem>
            <ListItem><strong>PyCamp</strong> - Python, obiektowość</ListItem>
        </UnorderedList>
        <br/>
        <Button colorScheme={'teal'} onClick={() => downloadFile('Mateusz Mogielski CV')}>Pobierz CV</Button>
    </>)
}