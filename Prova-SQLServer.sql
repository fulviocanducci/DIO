use Filmes;
-- Tabelas Filmes
SELECT Filmes.Nome, Filmes.Ano FROM Filmes;
SELECT Filmes.Nome, Filmes.Ano FROM Filmes ORDER BY Filmes.Ano ASC;
SELECT Filmes.Nome, Filmes.Ano, Filmes.Duracao FROM Filmes WHERE Filmes.Nome = 'De Volta para o Futuro';
SELECT Filmes.Nome, Filmes.Ano, Filmes.Duracao FROM Filmes WHERE Filmes.Ano > 2000;
SELECT Filmes.Nome, Filmes.Ano, Filmes.Duracao FROM Filmes WHERE Filmes.Duracao > 100 AND Filmes.Duracao < 150 ORDER BY Filmes.Duracao ASC;
SELECT Filmes.Ano, COUNT(Filmes.Ano) AS Quantidade FROM Filmes GROUP BY Filmes.Ano ORDER BY COUNT(Filmes.Duracao) DESC;

-- Tabelas Atores

SELECT Atores.PrimeiroNome, Atores.UltimoNome, Atores.Genero FROM Atores WHERE Atores.Genero = 'M';
SELECT Atores.PrimeiroNome, Atores.UltimoNome, Atores.Genero FROM Atores WHERE Atores.Genero = 'F' ORDER BY Atores.PrimeiroNome ASC;

SELECT Filmes.Nome, Generos.Genero FROM Filmes INNER JOIN FilmesGenero ON FilmesGenero.IdFilme = Filmes.Id
                                               INNER JOIN Generos ON Generos.Id = FilmesGenero.IdGenero;

SELECT Filmes.Nome, Generos.Genero FROM Filmes INNER JOIN FilmesGenero ON FilmesGenero.IdFilme = Filmes.Id
                                               INNER JOIN Generos ON Generos.Id = FilmesGenero.IdGenero
											   WHERE Generos.Genero = 'Mistério';

SELECT Filmes.Nome, Atores.PrimeiroNome, Atores.UltimoNome, ElencoFilme.Papel FROM Filmes INNER JOIN ElencoFilme ON ElencoFilme.IdFilme = Filmes.Id
                                                                                          INNER JOIN Atores ON Atores.Id = ElencoFilme.IdAtor
                  