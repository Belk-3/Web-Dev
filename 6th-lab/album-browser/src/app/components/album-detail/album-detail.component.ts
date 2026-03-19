import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  saving = false;
  saveSuccess = false;
  albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(this.albumId).subscribe({
      next: (data) => {
        this.album = data;
        this.editTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onSave(): void {
    if (!this.album || !this.editTitle.trim()) return;
    this.saving = true;
    this.saveSuccess = false;
    const updated: Album = { ...this.album, title: this.editTitle.trim() };
    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        this.album!.title = this.editTitle.trim();
        this.saving = false;
        this.saveSuccess = true;
        setTimeout(() => (this.saveSuccess = false), 2500);
      },
      error: () => {
        this.saving = false;
      }
    });
  }

  goToPhotos(): void {
    this.router.navigate(['/albums', this.albumId, 'photos']);
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
