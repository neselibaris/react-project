const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Multer ayarları
const upload = multer({ dest: 'uploads/' });

// MongoDB bağlantısı ve diğer kodlar...

// Tarif ekle
app.post('/api/recipes', upload.single('photo'), async (req, res) => {
  // İstek verilerini al
  const { name, recipe, date } = req.body;
  const photo = req.file;

  // Yeni bir tarif oluştur ve veritabanına kaydet
  try {
    const newRecipe = new Recipe({ name, recipe, photo, date });
    const savedRecipe = await newRecipe.save();
    res.json(savedRecipe);
  } catch (error) {
    res.status(500).json({ error: 'Error adding recipe' });
  }
});

// Diğer kodlar...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});