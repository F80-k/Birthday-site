// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Image gallery data with romantic captions
    const galleryImages = [
        {
            src: 'img_1.jpeg',
            caption: 'Every moment with you feels like a beautiful dream come true. Your love is my greatest treasure.'
        },
        {
            src: 'img_2.jpeg',
            caption: 'In your arms, I have found my home. Together, we create the most beautiful love story.'
        },
        {
            src: 'img_3.jpeg',
            caption: 'Like these flowers, my love for you blooms more beautiful with each passing day.'
        },
        {
            src: 'img_4.jpeg',
            caption: 'You are my sunshine on cloudy days, my anchor in stormy seas, my everything.'
        },
        {
            src: 'img_5.jpeg',
            caption: 'With you, every day is Valentine\'s Day, every moment is a celebration of love.'
        },
        {
            src: 'img_6.jpeg',
            caption: 'Your smile lights up my world brighter than a thousand stars in the night sky.'
        },
        {
            src: 'img_7.jpeg',
            caption: 'In the garden of my heart, you are the most beautiful flower that ever bloomed.'
        },
        {
            src: 'img_8.jpeg',
            caption: 'Forever isn\'t long enough to love you the way you deserve to be loved.'
        },
        {
            src: 'img_9.jpeg',
            caption: 'You are my today, my tomorrow, my always. Happy Birthday, my beautiful love.'
        },
        {
            src: 'img_10.jpeg',
            caption: 'Every love song makes sense now, every poem speaks our truth. You complete me.'
        }
    ];

    let currentImageIndex = 0;

    // Interactive Heart Gallery
    const interactiveHeart = document.getElementById('interactiveHeart');
    const imageGalleryModal = document.getElementById('imageGalleryModal');
    const closeModal = document.getElementById('closeModal');
    const galleryImage = document.getElementById('galleryImage');
    const romanticCaption = document.getElementById('romanticCaption');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const imageCounter = document.getElementById('imageCounter');

    // Open gallery when heart is clicked
    interactiveHeart.addEventListener('click', function() {
        imageGalleryModal.style.display = 'block';
        showImage(0);
        createFloatingMessage('💕 Our Beautiful Memories 💕');
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        imageGalleryModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === imageGalleryModal) {
            imageGalleryModal.style.display = 'none';
        }
    });

    // Previous image
    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentImageIndex);
    });

    // Next image
    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        showImage(currentImageIndex);
    });

    // Show image function
    function showImage(index) {
        const image = galleryImages[index];
        galleryImage.src = image.src;
        romanticCaption.textContent = image.caption;
        imageCounter.textContent = `${index + 1} / ${galleryImages.length}`;
        
        // Add fade effect
        galleryImage.style.opacity = '0';
        setTimeout(() => {
            galleryImage.style.opacity = '1';
        }, 100);
    }

    // Love Elements Data
    const loveQuotes = [
        "You are my sun, my moon, and all my stars. Happy Birthday, my love!",
        "In your eyes, I see my future. In your smile, I see my happiness.",
        "Every day with you is a new adventure, a new reason to smile.",
        "You are not just my love, you are my life, my heart, my everything.",
        "With you, I am home. With you, I am complete."
    ];

    const lovePoems = [
        "Roses are red, violets are blue, no birthday wish could be sweeter than you.",
        "In the symphony of life, you are my favorite melody, playing sweetly in my heart.",
        "Like a candle in the darkness, you light up my world with your love.",
        "You are the poetry my heart writes, the song my soul sings.",
        "In the book of my life, you are the most beautiful chapter."
    ];

    const loveMemories = [
        "Remember our first date? You were so nervous, but your smile melted my heart instantly.",
        "That rainy day when we danced in the puddles - pure magic and joy.",
        "Our first 'I love you' under the starlit sky - a moment I'll treasure forever.",
        "The way you laugh at my silly jokes makes every day brighter.",
        "Every sunrise with you is a new beginning, every sunset a beautiful ending."
    ];

    const loveSongs = [
        "🎵 'You are my sunshine, my only sunshine...' - Our song that plays in my heart daily.",
        "🎵 'All of me loves all of you...' - Every word speaks our truth.",
        "🎵 'I can't help myself, I love you and nobody else...' - My heart's anthem.",
        "🎵 'Perfect by Ed Sheeran' - Because you are perfect to me in every way.",
        "🎵 'A Thousand Years' - I have loved you for a thousand years, I'll love you for a thousand more."
    ];

    // Interactive Love Elements
    const loveQuoteElement = document.getElementById('loveQuote');
    const lovePoemElement = document.getElementById('lovePoem');
    const loveMemoryElement = document.getElementById('loveMemory');
    const loveSongElement = document.getElementById('loveSong');
    const loveContent = document.getElementById('loveContent');

    loveQuoteElement.addEventListener('click', function() {
        const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
        loveContent.textContent = randomQuote;
        createFloatingMessage('💌 Love Quote');
        addSparkleEffect(this);
    });

    lovePoemElement.addEventListener('click', function() {
        const randomPoem = lovePoems[Math.floor(Math.random() * lovePoems.length)];
        loveContent.textContent = randomPoem;
        createFloatingMessage('📝 Love Poem');
        addSparkleEffect(this);
    });

    loveMemoryElement.addEventListener('click', function() {
        const randomMemory = loveMemories[Math.floor(Math.random() * loveMemories.length)];
        loveContent.textContent = randomMemory;
        createFloatingMessage('🌟 Beautiful Memory');
        addSparkleEffect(this);
    });

    loveSongElement.addEventListener('click', function() {
        const randomSong = loveSongs[Math.floor(Math.random() * loveSongs.length)];
        loveContent.textContent = randomSong;
        createFloatingMessage('🎵 Our Love Song');
        addSparkleEffect(this);
    });

    // Create floating messages
    function createFloatingMessage(message) {
        const floatingMessage = document.createElement('div');
        floatingMessage.className = 'floating-message';
        floatingMessage.textContent = message;
        
        // Random position
        floatingMessage.style.left = Math.random() * 80 + 10 + '%';
        floatingMessage.style.top = Math.random() * 80 + 10 + '%';
        
        document.getElementById('floatingMessages').appendChild(floatingMessage);
        
        // Remove after animation
        setTimeout(() => {
            floatingMessage.remove();
        }, 4000);
    }

    // Add sparkle effect to elements
    function addSparkleEffect(element) {
        element.style.transform = 'scale(1.1) rotate(5deg)';
        element.style.background = 'linear-gradient(135deg, #ffd700, #ff6b9d)';
        
        setTimeout(() => {
            element.style.transform = '';
            element.style.background = 'linear-gradient(135deg, #ff9a9e, #fecfef)';
        }, 300);
    }

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('.quote-section, .gallery-section, .flowers-section, .couple-section, .wishes-section, .heart-gallery-section, .love-elements-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add click effects to quote cards
    const quoteCards = document.querySelectorAll('.quote-card');
    quoteCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            createFloatingMessage('💖 Love Message');
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Add hover effects to wish items
    const wishItems = document.querySelectorAll('.wish-item');
    wishItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #ff6b9d, #feca57)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, #ff9a9e, #fecfef)';
        });

        item.addEventListener('click', function() {
            createFloatingMessage('✨ Birthday Wish');
        });
    });

    // Create sparkle effect on click
    document.addEventListener('click', function(e) {
        createSparkle(e.clientX, e.clientY);
    });

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, #ff69b4, #ff1493);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: sparkleAnimation 1s ease-out forwards;
        `;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }

    // Add sparkle animation CSS
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkleAnimation {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: scale(1) rotate(180deg);
                opacity: 0.8;
            }
            100% {
                transform: scale(0) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(sparkleStyle);

    // Add typing effect to main title
    const mainTitle = document.querySelector('.main-title');
    const originalText = mainTitle.textContent;
    mainTitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            mainTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    
    setTimeout(typeWriter, 1000);

    // Add floating animation to birthday cake
    const cake = document.querySelector('.birthday-cake');
    let isFloating = false;
    
    cake.addEventListener('click', function() {
        if (!isFloating) {
            isFloating = true;
            this.style.animation = 'bounce 0.5s ease-in-out 3';
            createFloatingMessage('🎂 Happy Birthday!');
            setTimeout(() => {
                isFloating = false;
                this.style.animation = 'bounce 2s ease-in-out infinite';
            }, 1500);
        }
    });

    // Add parallax effect to images
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.gallery-image, .flowers-image, .couple-image');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Add random heart generation
    function createRandomHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
        heart.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 20 + 15}px;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            pointer-events: none;
            z-index: 1;
            animation: float 6s ease-in-out forwards;
            opacity: 0.6;
        `;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Generate random hearts every 3 seconds
    setInterval(createRandomHeart, 3000);

    // Add smooth scrolling for better user experience
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Keyboard navigation for gallery
    document.addEventListener('keydown', function(e) {
        if (imageGalleryModal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            } else if (e.key === 'Escape') {
                closeModal.click();
            }
        }
    });

    // Auto-generate floating love messages
    const autoMessages = [
        '💕 I Love You',
        '🌹 Forever Yours',
        '✨ You\'re Amazing',
        '💖 My Heart',
        '🎂 Happy Birthday',
        '💝 Special Day',
        '🌟 Beautiful Soul'
    ];

    setInterval(() => {
        const randomMessage = autoMessages[Math.floor(Math.random() * autoMessages.length)];
        createFloatingMessage(randomMessage);
    }, 8000);

    console.log('🎉 Happy Birthday! The enhanced interactive page is ready with love! ❤️');
});

