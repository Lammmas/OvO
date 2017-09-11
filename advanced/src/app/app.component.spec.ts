import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from "@angular/platform-browser";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // Basics
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Rock, Paper, Scissors');
  }));

  // Variables
  it(`should have [0, 0] as score`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.score).toEqual([0, 0]);
  }));
  it(`should have "" as pc`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.pc).toEqual('');
  }));
  it(`should have "Computer is waiting..."" as npc`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.npc).toEqual('Computer is waiting...');
  }));
  it(`should have "" as result`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.result).toEqual('');
  }));

  // Template
  it(`clicking on Paper should have "Paper" as pc`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const rockEl = fixture.debugElement.query(By.css('#paper'));

    rockEl.triggerEventHandler('click', null);
    expect(app.pc).toEqual('Paper');
  }));

  // Functions
  it(`play('Rock') should change pc to "Rock"`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.play('Rock');
    expect(app.pc).toEqual('Rock');
  }));
  it(`play('Rock') should change npc to "Computer chose X"`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.play('Rock');
    expect(app.npc.indexOf('Computer chose ') !== -1).toBe(true);
  }));
  it(`play('Rock') should return "Rock", "Paper" or "Scissors"`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let npc = app.play('Rock');
    expect(npc).toMatch(/Rock|Paper|Scissors/);
  }));
  it(`play('Rock') should increment score according to npc choice, or stay [0, 0] for draw`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let npc = app.play('Rock');

    if (npc == 'Paper') expect(app.score).toEqual([0, 1]);
    else if (npc == 'Scissors') expect(app.score).toEqual([1, 0]);
    else expect(app.score).toEqual([0, 0]);
  }));
  it(`play('Rock') should update 'result' with the result`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let npc = app.play('Rock');

    if (npc == 'Paper') expect(app.result).toEqual('You lose...');
    else if (npc == 'Scissors') expect(app.result).toEqual('You win!');
    else expect(app.result).toEqual('Draw');
  }));
  it(`play('Unreal') should change pc to "Unreal"`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.play('Unreal');
    expect(app.pc).toEqual('Unreal');
  }));
  it(`play('Unreal') should have [0, 0] as score`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.play('Unreal');
    expect(app.score).toEqual([0, 0]);
  }));
  it(`play('Unreal') should have "Draw" as result`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.play('Unreal');
    expect(app.result).toEqual('Draw');
  }));
});
