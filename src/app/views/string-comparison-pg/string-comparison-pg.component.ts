import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
// import * as stringComparison from 'string-comparison';
@Component({
  selector: 'app-string-comparison-pg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './string-comparison-pg.component.html',
  styleUrl: './string-comparison-pg.component.scss',
})
export class StringComparisonPgComponent {
  @Input() value1 = 'gio';
  @Input() value2 = ['gio234', '00', 'gio', 'sdf2ggg', 'sdfg', 'ig'];

  matches: { value: string; percentage: number }[] = [];

  // constructor() {}

  ngOnInit(): void {
    // const Thanos = 'gi';
    // const Rival = 'gigi';
    // const Avengers = ['edward', 'sealed', 'theatre'];
    // // use by cosine
    // let cos = stringComparison.cosine;
    // console.log(cos.similarity(Thanos, Rival));
  }

  // ngOnChanges(): void {
  //   this.calculateMatches();
  // }

  // calculateMatches(): void {
  //   this.matches = this.value2.map((value) => ({
  //     value: value,
  //     percentage: this.calculateLevenshteinSimilarity(this.value1, value),
  //   }));
  // }

  // calculateLevenshteinDistance(str1: string, str2: string): number {
  //   const matrix = [];

  //   // Initialize the matrix
  //   for (let i = 0; i <= str1.length; i++) {
  //     matrix[i] = [i];
  //   }
  //   for (let j = 0; j <= str2.length; j++) {
  //     matrix[0][j] = j;
  //   }

  //   // Compute the Levenshtein distance
  //   for (let i = 1; i <= str1.length; i++) {
  //     for (let j = 1; j <= str2.length; j++) {
  //       if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
  //         matrix[i][j] = matrix[i - 1][j - 1];
  //       } else {
  //         matrix[i][j] = Math.min(
  //           matrix[i - 1][j - 1] + 1, // substitution
  //           Math.min(
  //             matrix[i][j - 1] + 1, // insertion
  //             matrix[i - 1][j] + 1
  //           ) // deletion
  //         );
  //       }
  //     }
  //   }

  //   return matrix[str1.length][str2.length];
  // }

  // calculateLevenshteinSimilarity(str1: string, str2: string): number {
  //   const distance = this.calculateLevenshteinDistance(str1, str2);
  //   const maxLength = Math.max(str1.length, str2.length);
  //   return ((maxLength - distance) / maxLength) * 100;
  // }
}
