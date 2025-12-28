const categorySelect = document.getElementById('category');
const searchBar = document.getElementById('searchBar');
const products = document.querySelectorAll('.product');

// Filter by category
categorySelect.addEventListener('change', filterProducts);

// Filter by search input
searchBar.addEventListener('keyup', filterProducts);

function filterProducts() {
  const selectedCategory = categorySelect.value.toLowerCase();
  const searchText = searchBar.value.toLowerCase();

  products.forEach(product => {
    const categoryMatch = selectedCategory === 'all' || product.dataset.category === selectedCategory;
    const textMatch = product.textContent.toLowerCase().includes(searchText);

    if (categoryMatch && textMatch) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
