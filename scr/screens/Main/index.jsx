import { Box, Text, Center, FormControl, FormControlLabel, FormControlLabelText, Heading, Input, InputField, HStack, Switch, Button, ButtonText } from "@gluestack-ui/themed";
import { useState } from "react";


export default function Main() {
    const [peso, setPeso] = useState("72")
    const [altura, setAltura] = useState("1.70")
    const [sexo, setSexo] = useState(false)
    const [resultado, setResultado] = useState("")


    const CalcularHandle = () => {
        let alturaConvertida = parseFloat(altura)
        let result = 0

        if (altura>2.2) {
            setResultado("Altura deve ser menor que 2.2")
            return;
        }
        if (sexo) {
            result = (62.1*alturaConvertida)-44.7
            // mulher
        } else {
            //homem
            result = (72.7*alturaConvertida)-58
        }
        setResultado(result) 
    }

    return <Box bg="$amber600" p="$2" h={"$1/2"} w={300} borderRadius={"$md"}>
        <Center height={"$full"}>
            <Heading>Peso Ideal</Heading>
            <FormControl>
                <FormControlLabel>
                    <FormControlLabelText>Peso</FormControlLabelText>
                </FormControlLabel>
                <Input w={"$full"}>
                    <InputField value={peso} onChangeText={setPeso} />
                </Input>
                <FormControlLabel>
                    <FormControlLabelText>Altura</FormControlLabelText>
                </FormControlLabel>
                <Input w={"$full"}>
                    <InputField value={altura} onChangeText={setAltura} />
                </Input>
                <FormControlLabel>
                    <FormControlLabelText>Sexo</FormControlLabelText>
                </FormControlLabel>
                <Input w={"$full"}>
                    <InputField/>
                </Input>
                <HStack w={"$full"} space="md" justifyContent="center" alignItems="center">
                <FormControlLabelText>Homem</FormControlLabelText>
                    <Switch value={sexo} onValueChange={setSexo}/>
                    <FormControlLabelText>Mulher</FormControlLabelText>
                </HStack>
                <Button onPress={CalcularHandle}>
                    <ButtonText>Calcular</ButtonText>
                </Button>
                <Box justifyContent="center" alignItems="center" height={100}>
                    <Text>Resultado: {resultado}</Text>
                </Box>
            </FormControl>
        </Center>
        </Box>
}