import { useState } from "react";
import { Lock, AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

const ExtendedThematicEscapeRoomChallenge = () => {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(""));
  const [message, setMessage] = useState("");

  const puzzles = [
    {
      question:
        "Jag har fält men odlar inte, jag har stänger men är inte ett fängelse. På mig springer man men kommer ingenstans. Vad är jag?",
      answer: "fotbollsplan",
      hint: "Tänk på var Zlatan gör mål.",
    },
    {
      question: "Ju mer du tar bort av mig, desto större blir jag. Vad är jag?",
      answer: "hål",
      hint: "Ett pussel blir ofta komplett när denna saknas.",
    },
    {
      question:
        "Jag har skärm men är ingen TV, tangenter men är inget piano, minne men är ingen människa. Vad är jag?",
      answer: "dator",
      hint: "En oumbärlig del av modern teknik.",
    },
    {
      question:
        "Jag följer dig vart du än går, men bara när solen skiner. Vad är jag?",
      answer: "skugga",
      hint: "En mörk silhuett som följer dina rörelser.",
    },
    {
      question:
        "Jag har städer utan hus, skogar utan träd och floder utan vatten. Vad är jag?",
      answer: "karta",
      hint: "Ett verktyg för att hitta vägen.",
    },
    {
      question: "Vad kan resa runt jorden medan det stannar i ett hörn?",
      answer: "frimärke",
      hint: "Det hjälper brev att nå sin destination.",
    },
    {
      question:
        "Jag är inte levande, men jag växer; Jag har inte lungor, men jag behöver luft; Jag har inte mun, men vatten dödar mig. Vad är jag?",
      answer: "eld",
      hint: "Varmt och lysande, men farligt att leka med.",
    },
    {
      question: "Vilken frukt innehåller alla vokaler i alfabetisk ordning?",
      answer: "aubergine",
      hint: "En lila grönsak som ofta misstas för en frukt.",
    },
    {
      question:
        "Jag är alltid hungrig, jag måste alltid matas. Ju mer jag äter, desto starkare blir jag. Vatten dödar mig dock. Vad är jag?",
      answer: "eld",
      hint: "Samma svar som en tidigare gåta, men med en annan beskrivning.",
    },
    {
      question: "Vad tillhör dig men används mer av andra?",
      answer: "namn",
      hint: "Det är hur andra kallar på dig.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      answers[currentPuzzle].toLowerCase() === puzzles[currentPuzzle].answer
    ) {
      if (currentPuzzle === puzzles.length - 1) {
        setMessage(
          "Grattis din lilla prinskorv. Ge Carro en kram och snurra tre varv på stället medan du sjunger en sång för nästa ledtråd",
        );
      } else {
        setCurrentPuzzle(currentPuzzle + 1);
        setMessage("Bra jobbat! Gå vidare till nästa pussel.");
      }
    } else {
      setMessage("Tyvärr, det var inte rätt svar. Försök igen!");
    }
  };

  const handleAnswerChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentPuzzle] = e.target.value;
    setAnswers(newAnswers);
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Tematisk Escape Room Utmaning</CardTitle>
        <CardDescription>
          Lös alla pussel för att låsa upp det hemliga meddelandet. Du får gärna
          ta hjälp för att lösa gåtorna!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <p className="text-sm font-medium">
              Pussel {currentPuzzle + 1} av {puzzles.length}
            </p>
            <p>{puzzles[currentPuzzle].question}</p>
            <div className="flex flex-col space-y-1.5">
              <Input
                id="answer"
                placeholder="Ange ditt svar här"
                value={answers[currentPuzzle]}
                onChange={handleAnswerChange}
              />
            </div>
          </div>
        </form>
        <p className="mt-2 text-sm">{message}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => setMessage(puzzles[currentPuzzle].hint)}>
          <AlertCircle className="mr-2 h-4 w-4" /> Ledtråd
        </Button>
        <Button onClick={handleSubmit}>
          <Lock className="mr-2 h-4 w-4" /> Svara
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExtendedThematicEscapeRoomChallenge;
