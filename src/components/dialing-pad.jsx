"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, PhoneOff, Backspace } from "lucide-react";

export default function DialingPad() {
  const [number, setNumber] = useState("");
  const [isCalling, setIsCalling] = useState(false);

  const dialPad = [
    { number: "1", letters: "" },
    { number: "2", letters: "ABC" },
    { number: "3", letters: "DEF" },
    { number: "4", letters: "GHI" },
    { number: "5", letters: "JKL" },
    { number: "6", letters: "MNO" },
    { number: "7", letters: "PQRS" },
    { number: "8", letters: "TUV" },
    { number: "9", letters: "WXYZ" },
    { number: "*", letters: "" },
    { number: "0", letters: "+" },
    { number: "#", letters: "" },
  ];

  const handleNumberClick = (num) => {
    if (number.length < 15) {
      setNumber(number + num);
    }
  };

  const handleBackspace = () => {
    setNumber(number.slice(0, -1));
  };

  const handleCall = () => {
    if (number.trim()) {
      setIsCalling(true);
      // Simulate call for demo
      setTimeout(() => {
        setIsCalling(false);
      }, 3000);
    }
  };

  const handleHangup = () => {
    setIsCalling(false);
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          Dialing Pad
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Display */}
        <div className="bg-muted rounded-lg p-4 text-center">
          <div className="text-2xl font-mono font-bold text-foreground min-h-[40px] flex items-center justify-center">
            {number || "Enter number"}
          </div>
        </div>

        {/* Dial Pad */}
        <div className="grid grid-cols-3 gap-3">
          {dialPad.map((key) => (
            <Button
              key={key.number}
              variant="outline"
              className="h-16 flex flex-col items-center justify-center text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => handleNumberClick(key.number)}
              disabled={isCalling}
            >
              <span>{key.number}</span>
              {key.letters && (
                <span className="text-xs opacity-70">{key.letters}</span>
              )}
            </Button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 h-12"
            onClick={handleBackspace}
            disabled={!number || isCalling}
          >
            <Backspace className="w-4 h-4 mr-2" />
            Delete
          </Button>

          <Button
            className={`flex-1 h-12 ${
              isCalling
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
            onClick={isCalling ? handleHangup : handleCall}
            disabled={!number && !isCalling}
          >
            {isCalling ? (
              <>
                <PhoneOff className="w-4 h-4 mr-2" />
                Hang Up
              </>
            ) : (
              <>
                <Phone className="w-4 h-4 mr-2" />
                Call
              </>
            )}
          </Button>
        </div>

        {/* Call Status */}
        {isCalling && (
          <div className="text-center text-sm text-green-600 font-medium">
            Calling {number}...
          </div>
        )}
      </CardContent>
    </Card>
  );
}