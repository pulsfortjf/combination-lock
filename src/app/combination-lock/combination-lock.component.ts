import { Component } from '@angular/core';

@Component ({
    selector: 'combination-lock-component',
    templateUrl: './combination-lock.component.html',
    styleUrls: ['./combination-lock.component.css']
})
export class CombinationLock {
    public myArray = ["A", "B", "C", "D", "E"];
    public currWords = [0, 0, 0, 0, 0];

    rotate(id: number): void {
        this.currWords[id] = (this.currWords[id] + 1) % this.myArray.length;
        this.checkPhrase();
    }

    public correctPhrase = false;

    //unlocks when the phrase D A B D A  is input on the buttons
    checkPhrase(): void {
        if (this.currWords[0] === 3 && this.currWords[1] === 0 && this.currWords[2] === 1 && this.currWords[3] === 3 && this.currWords[4] === 0)
            this.correctPhrase = true;
        else
            this.correctPhrase = false;
    }
}