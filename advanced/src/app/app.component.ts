import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    score = [0, 0];
    pc = '';
    npc = 'Computer is waiting...';
    result = '';

    play(pc: string) {
        // Get percentage; not of 100, but of 99, because that divides by 3 equally
        var rand = Math.round(Math.random() * 99);
        var npc = 'Rock';

        if (rand >= 33) npc = 'Paper';
        else if (rand >= 66) npc = 'Scissors';

        if ((pc == 'Rock' && npc == 'Paper') ||
            (pc == 'Paper' && npc == 'Scissors') ||
            (pc == 'Scissors' && npc == 'Rock')) {
            this.result = 'You lose...';
            this.score[1]++;
        }
        else if ((npc == 'Rock' && pc == 'Paper') ||
            (npc == 'Paper' && pc == 'Scissors') ||
            (npc == 'Scissors' && pc == 'Rock')) {
            this.result = 'You win!';
            this.score[0]++;
        } else this.result = 'Draw';

        this.pc = pc;
        this.npc = 'Computer chose ' + npc;

        return npc;
    }
}
