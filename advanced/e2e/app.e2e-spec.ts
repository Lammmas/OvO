import { AppPage } from './app.po';

describe('advanced App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  // Static elements
  it('should display welcome message', () => {
    expect(page.getTitle()).toEqual('Rock, Paper, Scissors');
  });
  it('should have rock image', () => {
    page.getUrl().then((url) => {
        // URL is something like http://localhost:49152/
        expect(page.getRockImage()).toEqual(url + 'assets/images/rock.png');
    });
  });

  it('should have PC starting score 0', () => {
    expect(page.getPcScore()).toEqual('You: 0');
  });
  it('should have NPC starting score 0', () => {
    expect(page.getNpcScore()).toEqual('Computer: 0');
  });

  it('should have PC starting choice ""', () => {
    // With space because of the &nbsp;
    expect(page.getPcChoice()).toEqual(' ');
  });
  it('should have NPC starting choice "Computer is waiting..."', () => {
    expect(page.getNpcChoice()).toEqual('Computer is waiting...');
  });

  it('should have result ""', () => {
    expect(page.getResult()).toEqual(' ');
  });
  it('should change result on button click', () => {
    page.getRockButton().click();
    expect(page.getResult()).not.toEqual(' ');
  });
});
