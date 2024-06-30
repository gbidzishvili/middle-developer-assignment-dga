import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { stringSimilarity } from 'string-similarity-js';
@Component({
  selector: 'app-string-comparison-pg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './string-comparison-pg.component.html',
  styleUrl: './string-comparison-pg.component.scss',
})
export class StringComparisonPgComponent {
  stringToCompare = 'st';
  strings = ['stosdf', 'st', 'sto', '00'];
  comparedByNpmPackage = new BehaviorSubject<
    { str1: string; str2: string; percentage: number }[]
  >([]);
  comparedByLevenshteinSimilarity = new BehaviorSubject<
    { str1: string; str2: string; percentage: number }[]
  >([]);

  ngOnInit(): void {
    this.comparedByLevenshteinSimilarity.next(
      this.strings.map((v) => ({
        str1: this.stringToCompare,
        str2: v,
        percentage:
          stringSimilarity(
            v,
            this.stringToCompare,
            this.stringToCompare.length
          ) * 100,
      }))
    );
    this.calculateMatches();
  }

  calculateMatches(): void {
    this.comparedByNpmPackage.next(
      this.strings.map((value) => ({
        str1: this.stringToCompare,
        str2: value,
        percentage: this.calculateLevenshteinSimilarity(
          this.stringToCompare,
          value
        ),
      }))
    );
  }

  calculateLevenshteinDistance(str1: string, str2: string): number {
    const matrix = [];

    for (let i = 0; i <= str1.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= str2.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= str1.length; i++) {
      for (let j = 1; j <= str2.length; j++) {
        if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
          );
        }
      }
    }

    return matrix[str1.length][str2.length];
  }

  calculateLevenshteinSimilarity(str1: string, str2: string): number {
    const distance = this.calculateLevenshteinDistance(str1, str2);
    const maxLength = Math.max(str1.length, str2.length);
    return ((maxLength - distance) / maxLength) * 100;
  }
}
