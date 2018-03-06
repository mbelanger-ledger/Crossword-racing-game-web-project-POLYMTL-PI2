import { TestBed, inject } from '@angular/core/testing';

import { DefinitionsService } from './definitions.service';
import { WordService } from './word.service';
import { GridService } from './grid.service';
import { GridWord, Direction } from '../../../../common/crosswordsInterfaces/word';


const word1: GridWord = { row: 0, column: 0, direction: Direction.HORIZONTAL, value: "sit", definition: "I like to ___ on my chair." };
const word2: GridWord = { row: 0, column: 0, direction: Direction.VERTICAL, value: "sat", definition: "I ___ on a chair." };

const words: GridWord[] = [word1, word2];

describe('DefinitionsService', () => {

  let wordService: WordService;
  let definitionsService: DefinitionsService;

  beforeEach(() => {

    wordService = new WordService();
    wordService.words = words;
    definitionsService = new DefinitionsService(wordService);
    definitionsService.initialize();

    TestBed.configureTestingModule({
      providers: [DefinitionsService, WordService, GridService]
    });
  });

  it('should be created', inject([DefinitionsService], (service: DefinitionsService) => {
    expect(service).toBeTruthy();
  }));

  it("should be true if definition is selected", () => {
    wordService["_selectedWord"] = word1;

    expect(definitionsService.isSelectedDefinition(word1.definition)).toBeTruthy();
  });

  it("should be false if definition is not selected", () => {
    wordService["_selectedWord"] = word2;

    expect(definitionsService.isSelectedDefinition(word1.definition)).toBeFalsy();
  });

});
