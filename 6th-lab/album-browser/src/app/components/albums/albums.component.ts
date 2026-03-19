import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  deletingIds = new Set<number>();

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  onDelete(event: Event, id: number): void {
    event.stopPropagation();
    this.deletingIds.add(id);
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== id);
        this.deletingIds.delete(id);
      },
      error: () => {
        this.deletingIds.delete(id);
      }
    });
  }
}
