// Data
const popularCities = [
    'Mumbai, Maharashtra',
    'New Delhi, Delhi',
    'Bengaluru, Karnataka',
    'Hyderabad, Telangana',
    'Chennai, Tamil Nadu',
    'Kolkata, West Bengal',
    'Pune, Maharashtra',
    'Jaipur, Rajasthan',
    'Ahmedabad, Gujarat',
    'Goa',
    'Udaipur, Rajasthan',
    'Agra, Uttar Pradesh',
    'Varanasi, Uttar Pradesh',
    'Kochi, Kerala',
    'Shimla, Himachal Pradesh'
];

const hotels = [
    {
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        name: 'Taj Palace Mumbai',
        location: 'Mumbai, Maharashtra',
        price: '₹12,990',
        rating: 4.8,
        reviews: 1250,
        amenities: ['Pool', 'Spa', 'Restaurant', 'Free WiFi']
    },
    {
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
        name: 'The Oberoi Delhi',
        location: 'New Delhi, Delhi',
        price: '₹15,990',
        rating: 4.9,
        reviews: 980,
        amenities: ['Fine Dining', 'Spa', 'Free WiFi', 'Luxury Suite']
    },
    {
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
        name: 'ITC Grand Chola',
        location: 'Chennai, Tamil Nadu',
        price: '₹11,490',
        rating: 4.7,
        reviews: 850,
        amenities: ['Pool', 'Gym', 'Restaurant', 'Free WiFi']
    },
    {
        image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a',
        name: 'Taj Lake Palace',
        location: 'Udaipur, Rajasthan',
        price: '₹25,990',
        rating: 4.9,
        reviews: 1120,
        amenities: ['Lake View', 'Heritage', 'Spa', 'Fine Dining']
    },
    {
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
        name: 'The Leela Palace',
        location: 'Bengaluru, Karnataka',
        price: '₹14,790',
        rating: 4.8,
        reviews: 760,
        amenities: ['Pool', 'Business Center', 'Spa', 'Free WiFi']
    },
    {
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
        name: 'Ritz Carlton Goa',
        location: 'Goa',
        price: '₹18,990',
        rating: 4.9,
        reviews: 890,
        amenities: ['Beach Access', 'Spa', 'Pool', 'Fine Dining']
    },
    {
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
        name: 'Grand Hyatt Kochi',
        location: 'Kochi, Kerala',
        price: '₹13,990',
        rating: 4.6,
        reviews: 480,
        amenities: ['Lake View', 'Spa', 'Pool', 'Restaurant']
    }
];

const deals = [
    {
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
        title: 'Weekend Getaway',
        location: 'Mumbai, Maharashtra',
        discount: '30% OFF',
        price: '₹8,990',
        originalPrice: '₹12,990',
        description: 'Perfect weekend escape with breakfast included'
    },
    {
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
        title: 'Business Special',
        location: 'New Delhi, Delhi',
        discount: '25% OFF',
        price: '₹11,990',
        originalPrice: '₹15,990',
        description: 'Ideal for business travelers with airport transfer'
    },
    {
        image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a',
        title: 'Heritage Experience',
        location: 'Udaipur, Rajasthan',
        discount: '20% OFF',
        price: '₹20,790',
        originalPrice: '₹25,990',
        description: 'Experience royal heritage with palace tour included'
    },
    {
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
        title: 'Beach Retreat',
        location: 'Goa',
        discount: '35% OFF',
        price: '₹12,990',
        originalPrice: '₹19,990',
        description: 'Luxury beach vacation with all meals included'
    },
    {
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
        title: 'Wellness Package',
        location: 'Kerala',
        discount: '40% OFF',
        price: '₹8,990',
        originalPrice: '₹14,990',
        description: 'Rejuvenating spa retreat with yoga sessions'
    }
];

const careers = [
    {
        title: 'Hotel Manager',
        location: 'Mumbai, Maharashtra',
        experience: '5+ years',
        salary: '₹12-18 LPA',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
        description: 'Looking for an experienced hotel manager to oversee operations'
    },
    {
        title: 'Front Desk Executive',
        location: 'Bengaluru, Karnataka',
        experience: '2+ years',
        salary: '₹4-6 LPA',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
        description: 'Customer-focused front desk professional needed'
    },
    {
        title: 'Chef de Cuisine',
        location: 'New Delhi, Delhi',
        experience: '7+ years',
        salary: '₹15-20 LPA',
        image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c',
        description: 'Experienced chef needed for our fine dining restaurant'
    },
    {
        title: 'Revenue Manager',
        location: 'Mumbai, Maharashtra',
        experience: '4+ years',
        salary: '₹10-15 LPA',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
        description: 'Strategic revenue management professional needed'
    },
    {
        title: 'Spa Manager',
        location: 'Goa',
        experience: '3+ years',
        salary: '₹8-12 LPA',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874',
        description: 'Experienced spa manager for luxury wellness center'
    }
];


        // Functions
        function showSection(sectionId) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
        }

        function showLocationSuggestions() {
            const input = document.getElementById('locationSearch');
            const suggestionsDiv = document.getElementById('locationSuggestions');
            const query = input.value.toLowerCase();

            if (query.length === 0) {
                suggestionsDiv.style.display = 'none';
                return;
            }

            const filteredCities = popularCities.filter(city =>
                city.toLowerCase().includes(query)
            );

            suggestionsDiv.innerHTML = filteredCities
                .map(city => `<div class="location-suggestion" onclick="selectLocation('${city}')">${city}</div>`)
                .join('');

            suggestionsDiv.style.display = 'block';
        }

        function selectLocation(city) {
            document.getElementById('locationSearch').value = city;
            document.getElementById('locationSuggestions').style.display = 'none';
        }

        function renderHotels(filteredHotels = hotels) {
            const container = document.getElementById('hotelsGrid');
            container.innerHTML = filteredHotels.map(hotel => `
                <div class="card">
                    <img src="${hotel.image}" alt="${hotel.name}">
                    <div class="card-content">
                        <h3 class="card-title">${hotel.name}</h3>
                        <p class="location-text">${hotel.location}</p>
                        <div class="rating">
                            <span class="stars">${'★'.repeat(Math.floor(hotel.rating))}${hotel.rating % 1 >= 0.5 ? '½' : ''}</span>
                            <span class="rating-number">${hotel.rating}</span>
                            <span class="review-count">(${hotel.reviews} reviews)</span>
                        </div>
                        <div class="price">${hotel.price}<span style="font-size: 0.9rem; color: #666">/night</span></div>
                        <div class="amenities">
                            ${hotel.amenities.map(amenity => `
                                <span class="amenity">${amenity}</span>
                            `).join('')}
                        </div>
                        <button class="btn" onclick="bookHotel('${hotel.name}')">Book Now</button>
                    </div>
                </div>
            `).join('');
        }

        function renderDeals() {
            const container = document.getElementById('dealsGrid');
            container.innerHTML = deals.map(deal => `
                <div class="card">
                    <div style="position: relative;">
                        <img src="${deal.image}" alt="${deal.title}">
                        <div class="deal-badge">${deal.discount}</div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${deal.title}</h3>
                        <p class="location-text">${deal.location}</p>
                        <p>${deal.description}</p>
                        <div class="price">
                            ${deal.price}
                            <span style="text-decoration: line-through; <span style="text-decoration: line-through; font-size: 1rem; color: #666; margin-left: 0.5rem">
                                ${deal.originalPrice}
                            </span>
                        </div>
                        <button class="btn" onclick="bookDeal('${deal.title}')">Book Now</button>
                    </div>
                </div>
            `).join('');
        }

        function renderCareers() {
            const container = document.getElementById('careersGrid');
            container.innerHTML = careers.map(career => `
                <div class="career-card">
                    <img src="${career.image}" alt="${career.title}" class="career-image">
                    <div class="career-content">
                        <h3 class="career-title">${career.title}</h3>
                        <div class="career-details">
                            <p><strong>Location:</strong> ${career.location}</p>
                            <p><strong>Experience:</strong> ${career.experience}</p>
                            <p><strong>Salary:</strong> ${career.salary}</p>
                            <p>${career.description}</p>
                        </div>
                        <button class="btn" onclick="applyJob('${career.title}')">Apply Now</button>
                    </div>
                </div>
            `).join('');
        }

        function searchHotels() {
            const location = document.getElementById('locationSearch').value.toLowerCase();
            const priceRange = document.getElementById('priceRange').value;

            let filteredHotels = hotels;

            if (location) {
                filteredHotels = filteredHotels.filter(hotel =>
                    hotel.location.toLowerCase().includes(location)
                );
            }

            if (priceRange) {
                const [min, max] = priceRange.split('-').map(price => parseInt(price));
                filteredHotels = filteredHotels.filter(hotel => {
                    const price = parseInt(hotel.price.replace(/[₹,]/g, ''));
                    return max ? price >= min && price <= max : price >= min;
                });
            }

            showSection('hotels');
            renderHotels(filteredHotels);
        }

        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        function handleSignIn(event) {
            event.preventDefault();
            alert('Sign in functionality will be implemented soon!');
            closeModal('signInModal');
        }

        function handleSignUp(event) {
            event.preventDefault();
            alert('Sign up functionality will be implemented soon!');
            closeModal('signUpModal');
        }

        function bookHotel(hotelName) {
            const hotel = hotels.find(h => h.name === hotelName);
            document.getElementById('bookingSummary').innerHTML = `
                <p><strong>Hotel:</strong> ${hotel.name}</p>
                <p><strong>Location:</strong> ${hotel.location}</p>
                <p><strong>Price:</strong> ${hotel.price}/night</p>
            `;
            openModal('paymentModal');
        }

        function bookDeal(dealTitle) {
            const deal = deals.find(d => d.title === dealTitle);
            document.getElementById('bookingSummary').innerHTML = `
                <p><strong>Deal:</strong> ${deal.title}</p>
                <p><strong>Location:</strong> ${deal.location}</p>
                <p><strong>Price:</strong> ${deal.price}</p>
                <p><strong>Savings:</strong> ${deal.discount}</p>
            `;
            openModal('paymentModal');
        }

        function applyJob(jobTitle) {
            const job = careers.find(c => c.title === jobTitle);
            document.getElementById('jobDetails').innerHTML = `
                <p><strong>Position:</strong> ${job.title}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Experience Required:</strong> ${job.experience}</p>
                <p><strong>Salary Range:</strong> ${job.salary}</p>
            `;
            openModal('applicationModal');
        }

        function handlePayment(event) {
            event.preventDefault();
            document.getElementById('paymentSuccess').style.display = 'block';
            setTimeout(() => {
                closeModal('paymentModal');
                document.getElementById('paymentSuccess').style.display = 'none';
            }, 3000);
        }

        function handleApplication(event) {
            event.preventDefault();
            document.getElementById('applicationSuccess').style.display = 'block';
            setTimeout(() => {
                closeModal('applicationModal');
                document.getElementById('applicationSuccess').style.display = 'none';
            }, 3000);
        }

        function handleContactSubmit(event) {
            event.preventDefault();
            document.getElementById('contactSuccess').style.display = 'block';
            event.target.reset();
            setTimeout(() => {
                document.getElementById('contactSuccess').style.display = 'none';
            }, 3000);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderHotels();
            renderDeals();
            renderCareers();

            document.querySelectorAll('[data-section]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    showSection(e.target.dataset.section);
                });
            });

            window.onclick = function(event) {
                if (event.target.classList.contains('modal') ||
                    event.target.classList.contains('payment-modal') ||
                    event.target.classList.contains('application-modal')) {
                    event.target.style.display = 'none';
                }
            };

            document.addEventListener('click', (e) => {
                if (!e.target.closest('.search-box')) {
                    document.getElementById('locationSuggestions').style.display = 'none';
                }
            });
        });
