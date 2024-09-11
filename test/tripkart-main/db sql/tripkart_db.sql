-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2024 at 06:55 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tripkart_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `abouts`
--

CREATE TABLE `abouts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `experience_no` varchar(255) DEFAULT NULL,
  `experience_title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `abouts`
--

INSERT INTO `abouts` (`id`, `title`, `experience_no`, `experience_title`, `slug`, `description`, `image`, `status`, `created_at`, `updated_at`) VALUES
(1, 'DISCOVER THE WORLD WITH OUR GUIDE', '20', 'Years of Experience', 'discover-the-world-with-our-guide', '<p style=\"text-align: justify; margin-bottom: 20px; line-height: 26px; background-color: rgb(250, 250, 250);\"><span style=\"color: rgb(103, 105, 119); font-family: Barlow, sans-serif; text-align: start; background-color: rgb(255, 255, 255);\">You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</span><br></p>', 'upload/about/1773742755990479.jpg', 1, '2023-05-02 06:55:58', '2023-08-09 03:21:50');

-- --------------------------------------------------------

--
-- Table structure for table `agents`
--

CREATE TABLE `agents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `facebook_url` varchar(255) DEFAULT NULL,
  `linkedin_url` varchar(255) DEFAULT NULL,
  `twitter_url` varchar(255) DEFAULT NULL,
  `whatsapp_url` varchar(255) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `agents`
--

INSERT INTO `agents` (`id`, `name`, `slug`, `image`, `designation`, `description`, `facebook_url`, `linkedin_url`, `twitter_url`, `whatsapp_url`, `status`, `created_at`, `updated_at`) VALUES
(2, 'Rakibul Islam', 'rakibul-islam', 'upload/agent/1764772535534365.jpg', 'Office Manager', '<p>Office Manager<br></p>', 'https://www.facebook.com/', 'https://www.linkedin.com/', 'https://www.twitter.com/', 'https://www.whatsapp.com/', 1, '2023-05-02 03:04:01', '2023-05-02 03:04:01'),
(3, 'Kabir Hasan', 'kabir-hasan', 'upload/agent/1764772595067397.jpg', 'Creative Director', '<p>Creative Director<br></p>', 'https://www.facebook.com/', 'https://www.linkedin.com/', NULL, 'https://www.whatsapp.com/', 1, '2023-05-02 03:04:58', '2023-05-02 03:04:58'),
(4, 'Siyam Ahmed', 'siyam-ahmed', 'upload/agent/1764772657536731.jpg', 'Support Manager', '<p>Support Manager<br></p>', 'https://www.facebook.com/', NULL, 'https://www.twitter.com/', 'https://www.whatsapp.com/', 1, '2023-05-02 03:05:57', '2023-05-02 03:05:57'),
(5, 'Masud Rana', 'masud-rana', 'upload/agent/1764772713121907.jpg', 'CEO', '<p>CEO<br></p>', 'https://www.facebook.com/', 'https://www.linkedin.com/', 'https://www.twitter.com/', 'https://www.whatsapp.com/', 1, '2023-05-02 03:06:50', '2023-05-02 03:06:50');

-- --------------------------------------------------------

--
-- Table structure for table `aminities`
--

CREATE TABLE `aminities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `aminity` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `blog_category_id` int(11) DEFAULT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `view` int(11) DEFAULT 0,
  `seo_title` text DEFAULT NULL,
  `seo_description` text DEFAULT NULL,
  `show_homepage` tinyint(4) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `blog_image` varchar(255) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1=>Active, 0=>Inactive',
  `created_by` tinyint(3) DEFAULT 0,
  `updated_by` tinyint(3) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `blog_category_id`, `admin_id`, `view`, `seo_title`, `seo_description`, `show_homepage`, `title`, `slug`, `description`, `blog_image`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(3, 9, 1, 52, 'first seo title', 'first seo title', 1, 'One Package Five Countries', 'one-package-five-countries', '<ul><li>Five Countries --&gt; Thailand - Malaysia - Singapore - Vietnam - Cambodia.</li><li>12 Days 11 Nights.</li><li>Multi-city Air Tickets.</li><li>3 Start Hotel Accommodation.&nbsp;</li><li>Visa and Travel Documents.</li><li>All kind of Transportation.</li><li>Complementary Breakfast</li></ul>', 'upload/blog/1774363709458400.jpg', 1, 2, 0, '2023-05-02 04:07:55', '2023-08-17 03:02:53'),
(4, 9, 1, 65, 'Cox\'s Bazar Luxury Tour By Air', 'Cox\'s Bazar Luxury Tour By Air', 1, 'Cox\'s Bazar Luxury Tour By Air', 'coxs-bazar-luxury-tour-by-air', '<ul><li style=\"text-align: left;\">Five Start Hotel.</li><li style=\"text-align: left;\">Dhaka to Cox\'s Bazar to Dhaka by Air.</li><li style=\"text-align: left;\">2 Nights 3 Days.</li><li style=\"text-align: left;\">For Any Information Or Booking hotline 01756-586100, 01756584111</li></ul>', 'upload/blog/1774362424142815.jpg', 1, 2, 0, '2023-05-02 04:09:19', '2023-08-16 04:29:36'),
(6, 10, 1, 58, 'Maldives Girls Group Tour', 'Maldives Girls Group Tour', 1, 'Maldives Girls Group Tour', 'maldives-girls-group-tour', '<ul><li>Multi-City Air Tickets.</li><li>3 Nights 4 Days.</li><li>Three Star Hotel Accommodation.</li><li>All kind of Transportation.</li><li>Complementary Breakfast.</li></ul>', 'upload/blog/1774299792564204.webp', 1, 2, 2, '2023-05-15 03:16:16', '2023-08-16 04:29:28');

-- --------------------------------------------------------

--
-- Table structure for table `blog_categories`
--

CREATE TABLE `blog_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_categories`
--

INSERT INTO `blog_categories` (`id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(4, 'Single Family', 'single-family', 1, '2023-05-01 23:03:59', '2023-05-01 23:03:59'),
(6, 'Multi Family', 'multi-family', 1, '2023-05-01 23:04:13', '2023-05-01 23:04:13'),
(9, 'Everyone', 'everyone', 1, '2023-08-15 06:47:08', '2023-08-15 06:47:08'),
(10, 'Only Girls', 'only-girls', 1, '2023-08-15 23:46:16', '2023-08-15 23:46:16');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `image`, `status`, `created_at`, `updated_at`) VALUES
(14, 'upload/brand/1773732770287188.jpg', 0, '2023-08-09 00:43:07', '2023-08-09 00:43:17'),
(15, 'upload/brand/1773825079676660.png', 1, '2023-08-10 01:10:20', '2023-08-10 01:10:20'),
(16, 'upload/brand/1773825086968504.png', 1, '2023-08-10 01:10:27', '2023-08-10 01:10:27'),
(17, 'upload/brand/1773825094201806.png', 1, '2023-08-10 01:10:34', '2023-08-10 01:10:34'),
(18, 'upload/brand/1773825102558664.png', 1, '2023-08-10 01:10:42', '2023-08-10 01:10:42');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(100) NOT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(7, 'About', 'about', 1, '2023-05-08 23:58:05', '2023-05-08 23:58:05'),
(8, 'Services', 'services', 0, '2023-05-08 23:58:36', '2023-07-13 02:31:34'),
(9, 'Projects', 'projects', 0, '2023-05-08 23:59:09', '2023-08-07 03:20:46'),
(10, 'Blog', 'blog', 1, '2023-05-08 23:59:22', '2023-08-12 01:13:08'),
(11, 'Contact Us', 'contact-us', 1, '2023-05-08 23:59:36', '2023-05-08 23:59:36'),
(13, 'Tours', 'tours', 1, '2023-07-11 07:30:29', '2023-08-07 03:20:22');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `country_state_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `country_state_id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 'Rajshahi', 'rajshahi', 1, '2023-05-08 03:51:33', '2023-05-08 03:51:33'),
(2, 2, 'Dhaka', 'dhaka', 1, '2023-05-08 04:26:33', '2023-05-16 06:33:34'),
(6, 6, 'Patuakhali', 'patuakhali', 1, '2023-05-16 06:35:14', '2023-05-16 06:35:14'),
(7, 4, 'Moulovi Bazar', 'moulovi-bazar', 1, '2023-05-16 06:37:51', '2023-05-16 06:37:51'),
(8, 4, 'Sreemongal', 'sreemongal', 1, '2023-05-16 06:38:14', '2023-05-16 06:38:14'),
(9, 3, 'Khagrachori', 'khagrachori', 1, '2023-05-16 06:38:46', '2023-05-16 06:38:46'),
(10, 3, 'Rangamati', 'rangamati', 1, '2023-05-16 06:39:03', '2023-05-16 06:39:03'),
(11, 3, 'Bandarban', 'bandarban', 1, '2023-05-16 06:39:17', '2023-05-16 06:39:17'),
(12, 3, 'Cox\'s Bazar', 'coxs-bazar', 1, '2023-05-16 06:39:38', '2023-05-16 06:39:38');

-- --------------------------------------------------------

--
-- Table structure for table `counters`
--

CREATE TABLE `counters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `counter_no` varchar(255) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `counters`
--

INSERT INTO `counters` (`id`, `icon`, `title`, `counter_no`, `status`, `created_at`, `updated_at`) VALUES
(3, 'front flaticon-tag', 'Ticket Booking', '100', 1, '2023-05-08 23:48:48', '2023-08-10 00:40:32'),
(4, 'front flaticon-ship', 'Cruises Booking', '100', 1, '2023-05-08 23:49:31', '2023-08-10 00:40:07'),
(5, 'font flaticon-house', 'Amazing Tour', '250', 1, '2023-05-08 23:51:01', '2023-08-10 00:39:39'),
(6, 'front flaticon-air-freight', 'Flight Booking', '300', 1, '2023-05-08 23:51:34', '2023-08-16 06:01:13');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(3, 'Bangladesh', 'bangladesh', 1, '2023-05-08 02:20:02', '2023-05-08 02:20:02');

-- --------------------------------------------------------

--
-- Table structure for table `country_states`
--

CREATE TABLE `country_states` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `country_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `country_states`
--

INSERT INTO `country_states` (`id`, `country_id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(2, 3, 'Dhaka', 'dhaka', 1, '2023-05-08 02:20:53', '2023-05-08 02:22:24'),
(3, 3, 'Chittagong', 'chittagong', 1, '2023-05-08 02:21:00', '2023-05-16 06:27:14'),
(4, 3, 'Sylhet', 'sylhet', 1, '2023-05-16 06:28:09', '2023-05-16 06:28:09'),
(5, 3, 'Khulna', 'khulna', 1, '2023-05-16 06:28:23', '2023-05-16 06:28:23'),
(6, 3, 'Barisal', 'barisal', 1, '2023-05-16 06:28:36', '2023-05-16 06:28:36'),
(7, 3, 'Rajshahi', 'rajshahi', 1, '2023-05-16 06:29:41', '2023-05-16 06:29:41'),
(8, 3, 'Rangpur', 'rangpur', 1, '2023-05-16 06:29:56', '2023-05-16 06:29:56'),
(9, 3, 'Mymensingh', 'mymensingh', 1, '2023-05-16 06:30:18', '2023-05-16 06:30:18');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2022_12_15_141026_create_settings_table', 2),
(7, '2023_02_03_082606_create_pages_table', 3),
(9, '2023_02_04_081511_create_sliders_table', 5),
(10, '2023_04_28_091311_create_categories_table', 5),
(11, '2023_04_29_074624_create_properties_table', 6),
(12, '2023_04_29_075543_create_property_images_table', 6),
(13, '2023_02_04_052522_create_blogs_table', 7),
(14, '2023_04_29_095502_create_property_types_table', 7),
(15, '2023_04_29_100323_create_aminities_table', 7),
(16, '2023_04_29_100418_create_cities_table', 7),
(17, '2023_04_29_101326_create_nearest_locations_table', 7),
(18, '2023_04_29_101436_create_property_purposes_table', 7),
(19, '2023_04_29_102024_create_country_states_table', 7),
(20, '2023_04_29_102135_create_countries_table', 7),
(21, '2023_04_29_102306_create_property_aminities_table', 7),
(22, '2023_04_29_102633_create_property_nearest_locations_table', 7),
(24, '2023_04_30_050705_create_testimonials_table', 7),
(25, '2023_04_29_105442_create_services_table', 8),
(26, '2023_04_30_053006_create_agents_table', 8),
(27, '2023_04_30_073027_create_blog_categories_table', 9),
(28, '2023_05_02_065228_create_abouts_table', 10),
(29, '2023_05_03_072618_create_brands_table', 11),
(30, '2023_05_03_080531_create_counters_table', 12),
(31, '2023_05_10_063154_create_sections_table', 13);

-- --------------------------------------------------------

--
-- Table structure for table `nearest_locations`
--

CREATE TABLE `nearest_locations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `location` varchar(256) DEFAULT NULL,
  `slug` varchar(256) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1 COMMENT '1=>Active, 0=>Inactive	',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nearest_locations`
--

INSERT INTO `nearest_locations` (`id`, `location`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(3, 'Rail Station', 'rail-station', 1, '2023-05-08 01:08:54', '2023-05-08 01:08:54'),
(4, 'Bus Station', 'bus-station', 1, '2023-05-08 01:09:01', '2023-05-08 01:09:01'),
(5, 'Airport', 'airport', 1, '2023-05-08 01:09:06', '2023-05-08 01:09:06'),
(6, 'Beach', 'beach', 1, '2023-05-08 01:09:11', '2023-05-08 01:09:11'),
(7, 'Metro', 'metro', 1, '2023-05-08 01:09:17', '2023-05-08 01:09:17'),
(8, 'Bank', 'bank', 1, '2023-05-08 01:09:23', '2023-05-08 01:09:23'),
(9, 'School', 'school', 1, '2023-05-08 01:09:29', '2023-05-08 01:09:29'),
(10, 'Hospital', 'hospital', 1, '2023-05-08 01:09:35', '2023-05-08 01:09:35'),
(11, 'Super Market', 'super-market', 1, '2023-05-08 01:09:41', '2023-05-08 01:09:41'),
(13, 'Kolatoli Beach', 'kolatoli-beach', 1, '2023-05-23 05:55:22', '2023-05-23 05:55:22');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `position` varchar(11) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `name`, `title`, `description`, `position`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(1, 'About Us', 'About us page', '<p><span style=\"color: rgb(52, 52, 52); font-family: Nunito, sans-serif; background-color: rgb(250, 250, 250);\">About Us Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui vestibulum, bibendum purus sit amet, vulputate mauris. Ut adipiscing gravida tincidunt. Duis euismod placerat rhoncus. Phasellus mollis imperdiet placerat. Sed ac turpis nisl. Mauris at ante mauris. Aliquam posuere fermentum lorem, a aliquam mauris rutrum a. Curabitur sit amet pretium lectus, taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis et metus in libero sollicitudin venenatis eu sed enim. Nam felis lorem, suscipit ac nisl ac, iaculis dapibus tellus. Cras ante justo, aliquet quis placerat nec, molestie id turpis.</span><br></p>', '3', 'about-us', 1, '2023-05-08 23:34:39', '2023-05-08 23:34:39'),
(2, 'Contact Us', 'contact us page', '<p><span style=\"font-size: 1rem;\">Contact Us&nbsp;</span><span style=\"color: rgb(52, 52, 52); font-family: Nunito, sans-serif; background-color: rgb(250, 250, 250);\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui vestibulum, bibendum purus sit amet, vulputate mauris. Ut adipiscing gravida tincidunt. Duis euismod placerat rhoncus. Phasellus mollis imperdiet placerat. Sed ac turpis nisl. Mauris at ante mauris. Aliquam posuere fermentum lorem, a aliquam mauris rutrum a. Curabitur sit amet pretium lectus, taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis et metus in libero sollicitudin venenatis eu sed enim. Nam felis lorem, suscipit ac nisl ac, iaculis dapibus tellus. Cras ante justo, aliquet quis placerat nec, molestie id turpis.</span><br></p>', '3', 'contact-us', 1, '2023-05-08 23:34:52', '2023-05-08 23:34:52'),
(4, 'Services', 'Services page', '<p><span style=\"color: rgb(52, 52, 52); font-family: Nunito, sans-serif; background-color: rgb(250, 250, 250);\">Services Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui vestibulum, bibendum purus sit amet, vulputate mauris. Ut adipiscing gravida tincidunt. Duis euismod placerat rhoncus. Phasellus mollis imperdiet placerat. Sed ac turpis nisl. Mauris at ante mauris. Aliquam posuere fermentum lorem, a aliquam mauris rutrum a. Curabitur sit amet pretium lectus, taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis et metus in libero sollicitudin venenatis eu sed enim. Nam felis lorem, suscipit ac nisl ac, iaculis dapibus tellus. Cras ante justo, aliquet quis placerat nec, molestie id turpis.</span><br></p>', '3', 'services', 1, '2023-05-08 23:35:32', '2023-05-08 23:35:32'),
(5, 'Career', 'Career', '<p>Career<br></p>', '3', 'career', 1, '2023-05-29 00:16:25', '2023-05-29 00:16:25'),
(6, 'Job Application', 'Job Application', '<p>Any Job Application Upload Resume</p>', '1', 'job-application', 1, '2023-07-11 07:29:20', '2023-07-11 07:29:20');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_type` int(11) NOT NULL DEFAULT 1,
  `admin_id` int(11) NOT NULL DEFAULT 0,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `property_type_id` int(11) NOT NULL DEFAULT 0,
  `city_id` int(11) NOT NULL DEFAULT 0,
  `listing_package_id` int(11) NOT NULL DEFAULT 0,
  `property_purpose_id` int(11) NOT NULL DEFAULT 0,
  `title` text NOT NULL,
  `slug` text NOT NULL,
  `views` int(11) NOT NULL DEFAULT 0,
  `address` text DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `website` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `file` text DEFAULT NULL,
  `thumbnail_image` text DEFAULT NULL,
  `banner_image` text DEFAULT NULL,
  `number_of_unit` int(11) DEFAULT NULL,
  `urgent_property` int(11) DEFAULT NULL,
  `top_property` int(11) DEFAULT NULL,
  `number_of_room` int(11) DEFAULT NULL,
  `number_of_bedroom` int(11) DEFAULT NULL,
  `number_of_bathroom` int(11) DEFAULT NULL,
  `number_of_floor` int(11) DEFAULT NULL,
  `number_of_kitchen` int(11) DEFAULT NULL,
  `number_of_parking` int(11) DEFAULT NULL,
  `area` double DEFAULT NULL,
  `price` double DEFAULT NULL,
  `period` text DEFAULT NULL,
  `video_link` text DEFAULT NULL,
  `is_featured` tinyint(4) NOT NULL DEFAULT 0 COMMENT '1=>Featured, 0=>Not Featured',
  `is_running` tinyint(4) DEFAULT 0 COMMENT '1=>Running Project, 0=>>Not Running Project',
  `is_next` tinyint(4) DEFAULT 0 COMMENT '1=>Next Project, 0=>>Not Next Project',
  `is_future` tinyint(4) DEFAULT 0 COMMENT '1=>Future Project, 0=>>Not Future Project',
  `verified` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `seo_title` text DEFAULT NULL,
  `seo_description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `properties`
--

INSERT INTO `properties` (`id`, `user_type`, `admin_id`, `user_id`, `property_type_id`, `city_id`, `listing_package_id`, `property_purpose_id`, `title`, `slug`, `views`, `address`, `phone`, `email`, `website`, `short_description`, `description`, `file`, `thumbnail_image`, `banner_image`, `number_of_unit`, `urgent_property`, `top_property`, `number_of_room`, `number_of_bedroom`, `number_of_bathroom`, `number_of_floor`, `number_of_kitchen`, `number_of_parking`, `area`, `price`, `period`, `video_link`, `is_featured`, `is_running`, `is_next`, `is_future`, `verified`, `status`, `seo_title`, `seo_description`, `created_at`, `updated_at`) VALUES
(9, 1, 1, 0, 8, 12, 0, 5, 'SSB Hotel & Resort (Cox\'s Bazar)', 'ssb-hotel-resort-cox\'s-bazar', 63, 'Dhaka', '+8801618331151', 'sa01818@gmail.com', 'https://www.ssbanglagroup.com/', NULL, '<p><span style=\"font-size: 1rem;\">এসএসবি হোটেলের সম্মানিত মালিকগণ প্রত্যেকে সমাজের উচ্চ মর্যাদা সম্পন্ন বিধায় তাদের রেফারেন্সই যথেষ্ঠ হবে হোটেলটিকে সারা বছর বুকিং রাখার জন্য। তাছাড়া থাকছে আন্তর্জাতিক চেইন মার্কেটিং ও লোকাল প্রমোশনাল এক্টিভিটি ।</span></p><p>কক্সবাজারের কোন হোটেলেই একই সাথে সমুদ্র ও পাহাড়ের ভিউ পাওয়া যায় না, যার ফলে যেকোন পর্যটক একবার এই হোটেলে অবস্থান করলে পাহাড় ও সমুদ্রের মিলনবন্ধনে প্রাকৃতিক সৌন্দর্য মুগ্ধ এবং বারংবার এই হোটেলে থাকার জন্য আকৃষ্ট হবে। কারণ মানুষ সবসময় ভাল কিছুতে অভ্যস্ত হলে তার মধ্যেই অবস্থান করতে চায়।</p>', NULL, 'upload/custom-images/property-thumb-2023-06-08-12-35-29-8786.jpg', NULL, 3000, 1, 1, 300, 0, 350, 14, 3, 50, 100000, 400000, NULL, '', 1, NULL, NULL, 1, 0, 1, 'first seo title', 'seo title', '2023-05-07 03:56:46', '2023-07-19 12:51:13'),
(10, 1, 1, 0, 8, 12, 0, 5, 'SS Bangla Hotel And Resort', 'ss-bangla-hotel-and-resort', 128, 'Dhaka', '+8801701203652', 'admin@gmail.com', 'https://supremesafecost.com/', NULL, NULL, NULL, 'upload/custom-images/property-thumb-2023-05-07-10-09-27-7352.jpg', NULL, 203, 1, 1, 124, 782, 100, 577, 102, 157, 456, 0, NULL, '', 1, NULL, 1, 1, 0, 1, 'first seo title', 'asfdsaf', '2023-05-07 04:09:27', '2023-08-06 03:51:32'),
(11, 1, 1, 0, 8, 12, 0, 5, 'SS Bangla Hotel And Resort', 'ss-bangla-hotel-and-resort', 13, 'Dhaka', '0', 'rahat@gmail.com', 'https://supremesafecost.com/', NULL, NULL, NULL, 'upload/custom-images/property-thumb-2023-05-07-10-10-44-2719.jpg', NULL, 3, 1, 1, 2, 10, 12, 45, 18, 20, 4800, 0, NULL, '', 1, NULL, 1, 1, 0, 1, 'first seo title', 'fasfdsa', '2023-05-07 04:10:44', '2023-07-10 00:06:07'),
(12, 1, 1, 0, 8, 12, 0, 5, 'SS Bangla Hotel And Resort', 'ss-bangla-hotel-and-resort', 5, 'Dhaka', '0174115255', 'admin@gmail.com', 'https://supremesafecost.com/', NULL, NULL, NULL, 'upload/custom-images/property-thumb-2023-05-07-10-12-19-1590.jpg', NULL, 50, 1, 1, 10, 12, 15, 19, 20, 23, 4300, 0, NULL, '', 1, NULL, NULL, 1, 0, 1, 'first seo title', 'asfdas', '2023-05-07 04:12:19', '2023-06-24 02:45:32'),
(13, 1, 1, 0, 8, 2, 0, 5, 'SS Bangla Hotel And Resort', 'ss-bangla-hotel-and-resort', 8, 'Dhaka', '0174115255', 'user@gmail.com', 'https://supremesafecost.com/', NULL, NULL, NULL, 'upload/custom-images/property-thumb-2023-05-07-10-14-33-8708.jpg', NULL, 10, 1, 1, 20, 30, 40, 50, 60, 70, 1200, 0, NULL, '', 1, NULL, NULL, 1, 0, 1, 'saf', 'asfdsaf', '2023-05-07 04:14:33', '2023-06-21 04:19:01'),
(14, 1, 1, 0, 8, 12, 0, 5, 'SS Bangla Hotel And Resort', 'ss-bangla-hotel-and-resort', 4, 'Dhaka', '0174115255', 'user@gmail.com', 'https://supremesafecost.com/', NULL, NULL, NULL, 'upload/custom-images/property-thumb-2023-06-13-05-39-48-5177.jpg', NULL, 250, 1, 1, 230, 270, 120, 1203, 121, 125, 1600, 0, NULL, '', 1, NULL, NULL, NULL, 0, 1, 'first seo titleasf', 'asdfsafdafsdf', '2023-05-07 04:15:55', '2023-07-09 23:30:12'),
(15, 1, 1, 0, 8, 2, 0, 5, 'SS Bangla Hotel And Resort', 'ss-bangla-hotel-and-resort', 9, 'Dhaka', '+8801701203652', 'pbdfreelancing@gmail.com', NULL, NULL, NULL, NULL, 'upload/custom-images/property-thumb-2023-05-07-10-17-07-6696.jpg', NULL, 123, 1, 1, 128, 120, 10, 20, 11, 15, 120, 0, NULL, '', 1, NULL, 1, NULL, 0, 1, 'asfa', 'dfasfdad', '2023-05-07 04:17:07', '2023-06-21 04:18:21'),
(17, 1, 1, 0, 8, 1, 0, 5, 'SS Bangla Hotel And Resort', 'ss-bangla-hotel-and-resort', 0, 'Dhaka', '0174115255', 'user@gmail.com', 'https://supremesafecost.com/', NULL, NULL, NULL, 'upload/custom-images/property-thumb-2023-05-07-10-19-37-3176.jpg', NULL, 10, 1, 1, 150, 200, 300, 400, 500, 600, 3600, 0, NULL, '', 1, NULL, NULL, 1, 0, 1, 'fdasfd', 'asfdasfdsafd', '2023-05-07 04:19:37', '2023-06-21 04:18:05'),
(18, 1, 1, 0, 8, 1, 0, 5, 'SS Bangla Hotel And Resort', 'ss-bangla-hotel-and-resort', 24, 'Dhaka', '+8801701203652', 'admin@gmail.com', 'https://supremesafecost.com/', NULL, NULL, NULL, 'upload/custom-images/property-thumb-2023-05-08-10-59-32-6178.jpg', NULL, 50, 1, 1, 100, 200, 300, 400, 500, 600, 400, 0, NULL, 'https://www.youtube.com/watch?v=Get7rqXYrbQ', 0, NULL, NULL, 1, 0, 1, 'first seo title', 'safdsaf', '2023-05-08 04:59:33', '2023-06-21 04:17:45'),
(19, 1, 1, 0, 10, 1, 0, 5, 'SS Bangla Hotel & Resort', 'ss-bangla-hotel-resort-', 72, 'Dhaka', '+8801701203652', 'user@gmail.com', 'https://supremesafecost.com/', NULL, NULL, NULL, 'upload/custom-images/property-thumb-2023-05-08-11-05-58-4814.jpg', NULL, 10, 1, 1, 20, 30, 40, 50, 60, 70, 4200, 0, NULL, 'https://www.youtube.com/watch?v=Get7rqXYrbQ', 1, NULL, NULL, 1, 1, 1, 'first seo title', 'asdsafasf', '2023-05-08 05:05:58', '2023-08-01 01:27:53'),
(26, 1, 1, 0, 9, 12, 0, 5, 'SS Bangla Hotel And Resort', 'ss-bangla-hotel-and-resort', 24, 'Libero explicabo Po', '01618331151', 'sa01818@gmail.com', 'https://www.ssbanglagroup.com/', NULL, '<p>Our Running Project. we are try our level best for best service.</p>', NULL, 'upload/custom-images/property-thumb-2023-06-13-05-35-47-5010.JPG', NULL, 57, 1, 0, 57, 27, 10, 95, 38, 37, 22, 400000, NULL, 'https://www.youtube.com/watch?v=eJHmGcGH9MA', 1, 1, NULL, NULL, 0, 1, 'Autem nulla voluptat', 'Ipsa nobis consequa', '2023-05-29 13:45:30', '2023-06-21 04:16:57'),
(27, 1, 1, 0, 8, 1, 0, 5, 'SS Bangla Hotel And Resorts', 'ss-bangla-hotel-and-resorts', 29, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'upload/custom-images/property-thumb-2023-07-09-12-45-14-7908.jpg', NULL, NULL, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', 0, 1, NULL, NULL, 0, 1, 'SS Bangla Hotel And Resorts', 'SS Bangla Hotel And Resorts', '2023-07-09 06:45:14', '2023-08-05 19:59:33'),
(28, 1, 1, 0, 8, 2, 0, 5, 'SS Bangla Hotel And Resorts', 'ss-bangla-hotel-and-resorts', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'upload/custom-images/property-thumb-2023-07-09-12-53-35-6840.jpg', NULL, NULL, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', 0, 1, NULL, NULL, 0, 1, 'SS Bangla Hotel And Resorts', 'SS Bangla Hotel And Resorts', '2023-07-09 06:48:54', '2023-07-09 06:53:35');

-- --------------------------------------------------------

--
-- Table structure for table `property_aminities`
--

CREATE TABLE `property_aminities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `property_id` int(11) NOT NULL,
  `aminity_id` int(11) NOT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `property_images`
--

CREATE TABLE `property_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `property_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `property_images`
--

INSERT INTO `property_images` (`id`, `property_id`, `image`, `created_at`, `updated_at`) VALUES
(42, 18, 'upload/custom-images/property-slide-2023-05-08-10-59-33-6835.jpg', '2023-05-08 04:59:33', '2023-05-08 04:59:33'),
(43, 18, 'upload/custom-images/property-slide-2023-05-08-10-59-33-4629.jpg', '2023-05-08 04:59:33', '2023-05-08 04:59:33'),
(44, 18, 'upload/custom-images/property-slide-2023-05-08-10-59-33-6334.jpg', '2023-05-08 04:59:33', '2023-05-08 04:59:33'),
(45, 19, 'upload/custom-images/property-slide-2023-05-08-11-05-58-2569.jpg', '2023-05-08 05:05:58', '2023-05-08 05:05:58'),
(46, 19, 'upload/custom-images/property-slide-2023-05-08-11-05-58-2169.jpg', '2023-05-08 05:05:58', '2023-05-08 05:05:58'),
(47, 19, 'upload/custom-images/property-slide-2023-05-08-11-05-58-9079.jpg', '2023-05-08 05:05:58', '2023-05-08 05:05:58'),
(48, 19, 'upload/custom-images/property-slide-2023-05-08-11-05-58-2598.jpg', '2023-05-08 05:05:58', '2023-05-08 05:05:58'),
(57, 27, 'upload/custom-images/property-slide-2023-07-09-12-45-14-4802.jpg', '2023-07-09 06:45:14', '2023-07-09 06:45:14');

-- --------------------------------------------------------

--
-- Table structure for table `property_nearest_locations`
--

CREATE TABLE `property_nearest_locations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `property_id` int(11) NOT NULL,
  `nearest_location_id` int(11) DEFAULT NULL,
  `nearest_place_id` int(11) DEFAULT NULL,
  `distance` varchar(255) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `property_nearest_locations`
--

INSERT INTO `property_nearest_locations` (`id`, `property_id`, `nearest_location_id`, `nearest_place_id`, `distance`, `status`, `created_at`, `updated_at`) VALUES
(10, 10, 1, NULL, '100', 1, '2023-05-07 04:09:27', '2023-05-07 04:09:27'),
(11, 11, 2, NULL, '100', 1, '2023-05-07 04:10:44', '2023-05-07 04:10:44'),
(12, 12, 2, NULL, '100', 1, '2023-05-07 04:12:19', '2023-05-07 04:12:19'),
(20, 17, 2, NULL, '100', 1, '2023-05-07 04:19:37', '2023-05-07 04:19:37'),
(146, 9, 5, NULL, '2', 1, '2023-06-12 23:54:06', '2023-06-12 23:54:06'),
(147, 9, 6, NULL, '.2', 1, '2023-06-12 23:54:06', '2023-06-12 23:54:06'),
(155, 18, 5, NULL, '100', 1, '2023-06-21 04:17:45', '2023-06-21 04:17:45'),
(156, 15, 13, NULL, '1', 1, '2023-06-21 04:18:22', '2023-06-21 04:18:22'),
(157, 15, 5, NULL, '2', 1, '2023-06-21 04:18:22', '2023-06-21 04:18:22'),
(159, 13, 4, NULL, '100', 1, '2023-06-21 04:19:01', '2023-06-21 04:19:01'),
(160, 26, 5, NULL, '5', 1, '2023-07-08 08:20:44', '2023-07-08 08:20:44'),
(161, 14, 7, NULL, '100', 1, '2023-07-09 23:30:12', '2023-07-09 23:30:12'),
(162, 19, 3, NULL, '100', 1, '2023-07-09 23:30:57', '2023-07-09 23:30:57'),
(163, 19, 10, NULL, '100', 1, '2023-07-09 23:30:57', '2023-07-09 23:30:57'),
(164, 19, 8, NULL, '100', 1, '2023-07-09 23:30:57', '2023-07-09 23:30:57');

-- --------------------------------------------------------

--
-- Table structure for table `property_purposes`
--

CREATE TABLE `property_purposes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `purpose` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `property_purposes`
--

INSERT INTO `property_purposes` (`id`, `purpose`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(5, 'For Sale', 'for-sale', 1, '2023-06-08 07:55:53', '2023-06-08 07:55:53');

-- --------------------------------------------------------

--
-- Table structure for table `property_types`
--

CREATE TABLE `property_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `property_types`
--

INSERT INTO `property_types` (`id`, `type`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(8, 'Hotel & Resort', 'hotel--resort', 1, '2023-05-08 01:07:35', '2023-05-13 08:08:17'),
(9, 'Hotel & Resort', 'hotel--resort', 1, '2023-05-08 01:07:43', '2023-05-23 06:26:35'),
(10, 'Hotel & Resort', 'hotel--resort', 1, '2023-05-08 01:07:50', '2023-05-23 06:26:45'),
(11, 'Hotel & Resort', 'hotel--resort', 1, '2023-05-08 01:07:59', '2023-05-23 06:26:54'),
(12, 'Hotel & Resort', 'hotel--resort', 1, '2023-05-08 01:08:07', '2023-05-23 06:27:05'),
(13, 'Hotel & Resort', 'hotel--resort', 1, '2023-05-08 01:08:13', '2023-05-23 06:27:16'),
(14, 'Hotel & Resort', 'hotel--resort', 1, '2023-05-08 01:08:24', '2023-05-23 06:27:26'),
(15, 'Hotel & Resort', 'hotel--resort', 1, '2023-05-08 01:08:31', '2023-05-23 06:27:34');

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `name`, `title`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(9, 'CHOOSE YOUR PLACE', 'POPULAR TOURS', 'popular-tours', 1, '2023-08-12 02:42:55', '2023-08-12 02:42:55'),
(10, 'TOP DESTINATION', 'POPULAR DESTINATION', 'popular-destination', 1, '2023-08-12 02:43:24', '2023-08-12 02:43:24'),
(11, 'MOST POPULAR', 'TOUR COUNTRIES', 'tour-countries', 1, '2023-08-12 02:44:39', '2023-08-12 02:46:13'),
(12, 'TOUR  BLOG', 'TOUR  EXPERIENCE', 'tour--experience', 1, '2023-08-12 02:45:27', '2024-05-11 22:54:09');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `icon`, `title`, `slug`, `description`, `status`, `created_at`, `updated_at`) VALUES
(5, 'fa-solid fa-dumpster-fire', 'Commercial', 'commercial', '<p><font color=\"#343434\" face=\"Nunito, sans-serif\"><span style=\"background-color: rgb(250, 250, 250);\">আমাদের সার্ভিস এখানে লেখা হবে।</span></font></p>', 1, '2023-05-02 02:43:45', '2023-05-28 06:36:13'),
(6, 'SS BANGLA HOTEL & RESORT Car Services', 'SS BANGLA HOTEL & RESORT Car Services', 'ss-bangla-hotel--resort-car-services', '<p>Coming Soon.....</p>', 1, '2023-05-29 03:24:47', '2023-05-29 03:25:27');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `name`, `value`, `created_at`, `updated_at`) VALUES
(1, 'site_name', 'Tripkart', '2022-08-22 02:57:04', '2023-08-07 03:34:42'),
(2, 'site_logo', 'upload/setting/logo/16925084831691400882TRIPKART (1).png', '2022-08-03 12:46:20', '2023-08-19 23:14:43'),
(3, 'site_favicon', 'upload/setting/favicon/16925084831691400882TRIPKART (1).png', '2022-08-04 12:46:20', '2023-08-19 23:14:43'),
(4, 'site_footer_logo', 'upload/setting/logo/16925084831691400882TRIPKART (1).png', '2022-08-03 12:46:20', '2023-08-19 23:14:43'),
(5, 'phone', '+8801756-586100', '2022-08-04 12:47:27', '2023-08-16 00:06:06'),
(6, 'email', 'tripkart.info@gmail.com', '2022-08-12 12:47:52', '2023-08-07 03:34:42'),
(7, 'business_name', 'Tripkart', '2022-08-08 12:48:27', '2023-08-07 03:34:42'),
(8, 'business_address', 'Concord LR Villa (2B1), House 09, Road 113, Gulshan 2,  Dhaka - 1212', '2022-08-04 12:48:53', '2023-08-07 03:39:41'),
(9, 'business_hours', '09:00 - 8:00, Sa - Thu', '2022-08-01 12:49:29', '2023-02-19 06:21:25'),
(10, 'copy_right', 'tripkart.info@gmail.com', '2022-08-05 12:49:58', '2023-08-07 03:39:41'),
(11, 'developed_by', 'Tripkart', '2022-08-14 12:50:24', NULL),
(12, 'developer_link', 'https://www.tripkart.com/', '2022-08-13 12:50:56', NULL),
(13, 'facebook_url', 'https://www.facebook.com', '2022-08-18 12:51:19', '2024-05-11 22:53:50'),
(14, 'twitter_url', 'null', '2022-08-17 12:51:45', '2023-02-20 05:54:13'),
(15, 'linkedin_url', 'null', '2022-08-12 12:52:12', '2023-02-20 05:54:13'),
(16, 'youtube_url', 'null', '2022-08-04 12:52:42', '2023-02-20 05:54:13'),
(17, 'instagram_url', 'null', '2022-08-11 12:53:11', '2023-02-20 05:54:13'),
(18, 'pinterest_url', 'null', '2022-08-05 12:53:45', '2023-02-20 05:54:13'),
(22, 'meta_title', 'Tripkart', NULL, '2023-08-07 03:34:42'),
(23, 'meta_keyword', 'Tripkart', NULL, '2023-08-07 03:34:42'),
(24, 'meta_description', 'Tripkart', NULL, '2023-08-07 03:34:42');

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slider_img` varchar(255) DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `slug` varchar(100) NOT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `slider_img`, `title`, `description`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(1, 'upload/slider/1765787642273836.jpeg', 'BEST in Cox\'s bazar', 'Let Start With SSB Hotel & Resort of Cox\'s bazar', 'best-in-coxs-bazar', 0, '2023-05-13 07:58:42', '2023-08-09 02:34:34'),
(2, 'upload/slider/1765787131784420.jpeg', 'Your Best Choice', 'Let Start with SSB Hotel & Resort of Cox\'s bazar', 'your-best-choice', 0, '2023-05-13 07:50:36', '2023-08-09 02:34:35'),
(3, 'upload/slider/1765787003055279.jpeg', 'WELCOME SSB REAL ESTATE', 'Let Start With SSB Hotel & Resort of Cox\'sbazar.', 'welcome-ssb-real-estate', 0, '2023-05-28 06:03:19', '2023-08-09 02:34:32'),
(4, 'upload/slider/1767206099160060.jpg', 'Roof Top Swimming Pool', 'Roof Top Swimming Pool', 'roof-top-swimming-pool', 0, '2023-05-28 23:45:29', '2023-08-09 02:34:31'),
(5, 'upload/slider/1773739960838731.jpg', 'LET\'S TRIPKART THE WORLD WITH US', 'EXPLORE THE WORLD WITH', 'lets-tripkart-the-world-with-us', 1, '2023-08-09 02:43:09', '2023-08-09 02:43:09');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `image`, `designation`, `description`, `rating`, `status`, `created_at`, `updated_at`) VALUES
(4, 'Saiful Islam Opu', 'upload/testimonial/1774379220509953.jpg', 'Managing Director', '<p style=\"text-align: justify; border: 0px solid rgb(217, 217, 227); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(69,89,164,.5); --tw-ring-offset-shadow: 0 0 transparent; --tw-ring-shadow: 0 0 transparent; --tw-shadow: 0 0 transparent; --tw-shadow-colored: 0 0 transparent; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin: 1.25em 0px; color: rgb(55, 65, 81); font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; white-space: pre-wrap; background-color: rgb(247, 247, 248);\">I am honored to stand before you today as the Managing Director of our <b>Tripkart Travel Company</b>. As you all know, the real estate industry is constantly evolving, and the past year has been no exception.</p><p style=\"text-align: justify; border: 0px solid rgb(217, 217, 227); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(69,89,164,.5); --tw-ring-offset-shadow: 0 0 transparent; --tw-ring-shadow: 0 0 transparent; --tw-shadow: 0 0 transparent; --tw-shadow-colored: 0 0 transparent; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin: 1.25em 0px; color: rgb(55, 65, 81); font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; white-space: pre-wrap; background-color: rgb(247, 247, 248);\">The COVID-19 pandemic has presented numerous challenges for our industry, but we have adapted and continued to provide exceptional service to our clients. Our team has worked tirelessly to ensure that our properties remain safe, clean, and accessible for our tenants.</p><p style=\"text-align: justify; border: 0px solid rgb(217, 217, 227); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(69,89,164,.5); --tw-ring-offset-shadow: 0 0 transparent; --tw-ring-shadow: 0 0 transparent; --tw-shadow: 0 0 transparent; --tw-shadow-colored: 0 0 transparent; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin: 1.25em 0px; color: rgb(55, 65, 81); font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; white-space: pre-wrap; background-color: rgb(247, 247, 248);\">Despite the pandemic, our company has continued to thrive. We have expanded our portfolio, acquired new properties, and grown our team. This success would not have been possible without the hard work and dedication of each and every member of our team.</p><p style=\"text-align: justify; border: 0px solid rgb(217, 217, 227); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(69,89,164,.5); --tw-ring-offset-shadow: 0 0 transparent; --tw-ring-shadow: 0 0 transparent; --tw-shadow: 0 0 transparent; --tw-shadow-colored: 0 0 transparent; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin: 1.25em 0px; color: rgb(55, 65, 81); font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; white-space: pre-wrap; background-color: rgb(247, 247, 248);\">As we move forward, we must continue to innovate and adapt to the changing landscape of the real estate industry. We must remain vigilant in our efforts to provide safe and comfortable spaces for our tenants, while also remaining financially responsible and profitable.</p><p style=\"text-align: justify; border: 0px solid rgb(217, 217, 227); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(69,89,164,.5); --tw-ring-offset-shadow: 0 0 transparent; --tw-ring-shadow: 0 0 transparent; --tw-shadow: 0 0 transparent; --tw-shadow-colored: 0 0 transparent; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin: 1.25em 0px; color: rgb(55, 65, 81); font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; white-space: pre-wrap; background-color: rgb(247, 247, 248);\">I am confident that our team is up to this challenge. We have the talent, expertise, and passion necessary to continue to excel in this industry. Together, we will continue to build upon our successes and overcome any obstacles that may come our way.</p><p style=\"text-align: justify; border: 0px solid rgb(217, 217, 227); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(69,89,164,.5); --tw-ring-offset-shadow: 0 0 transparent; --tw-ring-shadow: 0 0 transparent; --tw-shadow: 0 0 transparent; --tw-shadow-colored: 0 0 transparent; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin: 1.25em 0px 0px; color: rgb(55, 65, 81); font-family: Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; white-space: pre-wrap; background-color: rgb(247, 247, 248);\">Thank you for your continued support and dedication to our company. Let us continue to work together towards a bright and successful future.</p>', NULL, 1, '2023-05-02 03:57:17', '2023-08-16 04:15:21');

-- --------------------------------------------------------

--
-- Table structure for table `tours`
--

CREATE TABLE `tours` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(256) DEFAULT NULL,
  `tour_country` varchar(255) DEFAULT NULL,
  `tour_division` varchar(255) DEFAULT NULL,
  `tour_day` varchar(255) DEFAULT NULL,
  `views` varchar(256) DEFAULT NULL,
  `tour_group` varchar(255) DEFAULT NULL,
  `depture` varchar(255) DEFAULT NULL,
  `depture_time` varchar(255) DEFAULT NULL,
  `return_time` varchar(255) DEFAULT NULL,
  `dress_code` varchar(255) DEFAULT NULL,
  `price_includes` varchar(255) DEFAULT NULL,
  `price_excludes` varchar(255) DEFAULT NULL,
  `regular_price` double(8,2) DEFAULT 0.00,
  `discount_price` double(8,2) DEFAULT 0.00,
  `discount_type` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `is_popular` int(11) DEFAULT 0 COMMENT '1=>Popular, 0=>Not Popular',
  `status` int(11) NOT NULL DEFAULT 1 COMMENT '1=>Active, 0=>Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tours`
--

INSERT INTO `tours` (`id`, `image`, `title`, `slug`, `tour_country`, `tour_division`, `tour_day`, `views`, `tour_group`, `depture`, `depture_time`, `return_time`, `dress_code`, `price_includes`, `price_excludes`, `regular_price`, `discount_price`, `discount_type`, `description`, `is_popular`, `status`, `created_at`, `updated_at`) VALUES
(2, 'upload/tour/1774304068957790.jpg', 'One Package Five Countries', 'one-package-five-countries', 'Thailand, Malaysia, Singapore, Vietnam, Cambodia', 'Thailand, Malaysia, Singapore, Vietnam, Cambodia', '12', '42', NULL, 'After 11 Nights 12 Days', NULL, NULL, 'Casual,comfortable', 'no', 'no', 138900.00, NULL, '2', 'i). Multi-City Air Tickets\r\nii). 3 Star Hotel Accommodation\r\niii). Visa and Travel Documents \r\niv). All kind Of Transportation\r\nv). Complementary Breakfast.\r\nFor any information or Booking call:  01756-586100, 01756584111', 1, 1, '2023-08-10 04:51:22', '2023-08-19 23:17:55'),
(3, 'upload/tour/1774302329762755.webp', 'Maldives Girls Group Tour  and Female Solo Travelers', 'maldives-girls-group-tour--and-female-solo-travelers', 'Maldives', 'Maldives', '4', '19', NULL, 'After 4 Nights 3 Days', NULL, NULL, 'Ratione quod minim e', 'no', 'no', 46500.00, NULL, '2', 'i). Multi-City Air Tickets\r\nii). 3 Star Hotel Accommodation\r\niii). All kind Of Transportation\r\niv). Complementary Breakfast. \r\nFor any information or Booking call:  01756-586100, 01756584111', 1, 1, '2023-08-10 05:25:21', '2023-08-18 08:44:30'),
(4, 'upload/tour/1774302573013579.jpg', 'Cox\'s Bazar Luxury By Air', 'cox\'s-bazar-luxury-by-air', 'Cox\'s Bazar', 'Cox\'s Bazar', '3', '36', NULL, 'After 2 Nights 3 Dys', NULL, NULL, 'Ratione Quod Minim e', 'no', 'no', 16999.00, NULL, '2', 'i). Five Star Hotel. \r\nii). 2 Nights 3 Days. \r\niii). Dhaka to Cox\'s Bazar to Dhaka.\r\nFor any information or Booking hotline 01756586100, 01756584111', 1, 1, '2023-08-10 05:25:33', '2023-08-16 07:00:40'),
(6, 'upload/tour/1774387269601126.jpg', 'Explore Sylhet Tour By Air', 'explore-sylhet-tour-by-air', 'Sylhet', 'Sylhet', '3', '3', NULL, 'After 3Days  2 Nights', NULL, NULL, 'Casual, Comfortable', 'no', 'no', 18900.00, 0.00, '2', 'i). Return Air Ticket \r\nii). 3 Days 2 Nights.\r\niii). 5 Star Hotel Accommodation. \r\niv). Buffet Breakfast.\r\nv). Airport Pick and Drop.\r\nFor any information or Booking to Call 01756-586100', 1, 1, '2023-08-16 06:06:06', '2023-08-28 10:08:57');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', NULL, '$2y$10$1bfuM0r6lswYr7LAqgP15OkIOdfWv2c3gshdonS03jRzNWhFPAGpa', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `tour_country` varchar(255) DEFAULT NULL,
  `tour_day` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `video_url`, `title`, `tour_country`, `tour_day`, `description`, `status`, `created_at`, `updated_at`) VALUES
(8, 'https://duruthemes.com/demo/html/travol/travel-video.mp4', 'Tour Popular Video', 'Bangladesh', NULL, NULL, 1, '2023-08-16 05:54:58', '2023-08-16 05:54:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `abouts`
--
ALTER TABLE `abouts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `agents`
--
ALTER TABLE `agents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `aminities`
--
ALTER TABLE `aminities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_categories`
--
ALTER TABLE `blog_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `counters`
--
ALTER TABLE `counters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `country_states`
--
ALTER TABLE `country_states`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nearest_locations`
--
ALTER TABLE `nearest_locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_aminities`
--
ALTER TABLE `property_aminities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_images`
--
ALTER TABLE `property_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_nearest_locations`
--
ALTER TABLE `property_nearest_locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_purposes`
--
ALTER TABLE `property_purposes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_types`
--
ALTER TABLE `property_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`),
  ADD KEY `value` (`value`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tours`
--
ALTER TABLE `tours`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `abouts`
--
ALTER TABLE `abouts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `agents`
--
ALTER TABLE `agents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `aminities`
--
ALTER TABLE `aminities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `blog_categories`
--
ALTER TABLE `blog_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `counters`
--
ALTER TABLE `counters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `country_states`
--
ALTER TABLE `country_states`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `nearest_locations`
--
ALTER TABLE `nearest_locations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `property_aminities`
--
ALTER TABLE `property_aminities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=245;

--
-- AUTO_INCREMENT for table `property_images`
--
ALTER TABLE `property_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `property_nearest_locations`
--
ALTER TABLE `property_nearest_locations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- AUTO_INCREMENT for table `property_purposes`
--
ALTER TABLE `property_purposes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `property_types`
--
ALTER TABLE `property_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tours`
--
ALTER TABLE `tours`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
