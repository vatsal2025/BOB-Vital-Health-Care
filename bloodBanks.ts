interface BloodBank {
  id: number;
  name: string;
  location: string;
  address: string;
  googleMapsLink: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  inventory: {
    [key: string]: number;
  };
}

// Calculate distance between two points using Haversine formula
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Distance in kilometers
}

export const bloodBanks: BloodBank[] = [
    {
        "id": 1,
        "name": "Indian Red Cross Society NHQ Blood Centre",
        "location": "Delhi",
        "address": "1, Red Cross Road, Sansad Marg Area, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Indian+Red+Cross+Society+NHQ+Blood+Centre+1%2C+Red+Cross+Road%2C+Sansad+Marg+Area%2C+New+Delhi",
        "inventory": {
            "A+": 28,
            "A-": 46,
            "B+": 97,
            "B-": 92,
            "AB+": 79,
            "AB-": 26,
            "O+": 46,
            "O-": 26
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 2,
        "name": "ABVIMS, Dr Ram Manohar Lohia Hospital",
        "location": "Delhi",
        "address": "Baba Kharak Singh Marg, Near Gurudwara Bangla Sahib, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=ABVIMS%2C+Dr+Ram+Manohar+Lohia+Hospital+Baba+Kharak+Singh+Marg%2C+Near+Gurudwara+Bangla+Sahib%2C+New+Delhi",
        "inventory": {
            "A+": 69,
            "A-": 43,
            "B+": 63,
            "B-": 65,
            "AB+": 18,
            "AB-": 82,
            "O+": 20,
            "O-": 56
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 3,
        "name": "Blood Centre, Fortis Escorts Heart Institute",
        "location": "Delhi",
        "address": "Okhla Road, New Friend Colony, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Fortis+Escorts+Heart+Institute+Okhla+Road%2C+New+Friend+Colony%2C+New+Delhi",
        "inventory": {
            "A+": 76,
            "A-": 48,
            "B+": 73,
            "B-": 23,
            "AB+": 22,
            "AB-": 31,
            "O+": 24,
            "O-": 2
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 4,
        "name": "Blood Centre Bhagwan Mahavir Hospital",
        "location": "Delhi",
        "address": "H-4/5, First Floor, Guru Harkishan Marg, Pitampura, Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre+Bhagwan+Mahavir+Hospital+H-4%2F5%2C+First+Floor%2C+Guru+Harkishan+Marg%2C+Pitampura%2C+Delhi",
        "inventory": {
            "A+": 31,
            "A-": 57,
            "B+": 98,
            "B-": 57,
            "AB+": 9,
            "AB-": 0,
            "O+": 31,
            "O-": 4
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 5,
        "name": "Blood Centre Guru Tegh Bahadur Hospital",
        "location": "Delhi",
        "address": "G.T.B. Hospital, Shahdara, Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre+Guru+Tegh+Bahadur+Hospital+G.T.B.+Hospital%2C+Shahdara%2C+Delhi",
        "inventory": {
            "A+": 97,
            "A-": 81,
            "B+": 96,
            "B-": 23,
            "AB+": 29,
            "AB-": 83,
            "O+": 17,
            "O-": 10
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 6,
        "name": "Blood Centre, Primus Super Speciality Hospital",
        "location": "Delhi",
        "address": "02, Chandragupta Marg, Lower Ground Floor, Chanakyapuri, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Primus+Super+Speciality+Hospital+02%2C+Chandragupta+Marg%2C+Lower+Ground+Floor%2C+Chanakyapuri%2C+New+Delhi",
        "inventory": {
            "A+": 83,
            "A-": 11,
            "B+": 3,
            "B-": 46,
            "AB+": 66,
            "AB-": 95,
            "O+": 4,
            "O-": 75
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 7,
        "name": "Blood Centre, Maharaja Agrasen Hospital",
        "location": "Delhi",
        "address": "West Punjabi Bagh, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Maharaja+Agrasen+Hospital+West+Punjabi+Bagh%2C+New+Delhi",
        "inventory": {
            "A+": 79,
            "A-": 62,
            "B+": 85,
            "B-": 37,
            "AB+": 35,
            "AB-": 65,
            "O+": 53,
            "O-": 75
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 8,
        "name": "Blood Centre, Jaipur Golden Hospital",
        "location": "Delhi",
        "address": "2, Institutional Area, Rohini Sector-III, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Jaipur+Golden+Hospital+2%2C+Institutional+Area%2C+Rohini+Sector-III%2C+New+Delhi",
        "inventory": {
            "A+": 75,
            "A-": 92,
            "B+": 6,
            "B-": 72,
            "AB+": 75,
            "AB-": 94,
            "O+": 10,
            "O-": 31
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 9,
        "name": "Blood Centre, Rajiv Gandhi Cancer Institute And Research Center",
        "location": "Delhi",
        "address": "Sector-V Rohini, Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Rajiv+Gandhi+Cancer+Institute+And+Research+Center+Sector-V+Rohini%2C+Delhi",
        "inventory": {
            "A+": 9,
            "A-": 96,
            "B+": 61,
            "B-": 93,
            "AB+": 43,
            "AB-": 25,
            "O+": 50,
            "O-": 17
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 10,
        "name": "Blood Centre Organization",
        "location": "Delhi",
        "address": "11/6B Shanti Chamber, Opp. Telephone Exchange, Pusa Road, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre+Organization+11%2F6B+Shanti+Chamber%2C+Opp.+Telephone+Exchange%2C+Pusa+Road%2C+New+Delhi",
        "inventory": {
            "A+": 44,
            "A-": 71,
            "B+": 88,
            "B-": 7,
            "AB+": 87,
            "AB-": 55,
            "O+": 45,
            "O-": 11
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 11,
        "name": "Blood Centre, Deen Dayal Upadhay Hospital",
        "location": "Delhi",
        "address": "Hari Nagar, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Deen+Dayal+Upadhay+Hospital+Hari+Nagar%2C+New+Delhi",
        "inventory": {
            "A+": 22,
            "A-": 97,
            "B+": 76,
            "B-": 78,
            "AB+": 50,
            "AB-": 62,
            "O+": 40,
            "O-": 83
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 12,
        "name": "Blood Centre, National Heart Institute",
        "location": "Delhi",
        "address": "49, Community Center, East of Kailash, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+National+Heart+Institute+49%2C+Community+Center%2C+East+of+Kailash%2C+New+Delhi",
        "inventory": {
            "A+": 5,
            "A-": 49,
            "B+": 70,
            "B-": 95,
            "AB+": 32,
            "AB-": 70,
            "O+": 60,
            "O-": 19
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 13,
        "name": "Blood Centre, Hindu Rao Hospital",
        "location": "Delhi",
        "address": "G Block 4th floor, Near Civil Lines Malkaganj, Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Hindu+Rao+Hospital+G+Block+4th+floor%2C+Near+Civil+Lines+Malkaganj%2C+Delhi",
        "inventory": {
            "A+": 44,
            "A-": 21,
            "B+": 65,
            "B-": 47,
            "AB+": 40,
            "AB-": 42,
            "O+": 42,
            "O-": 82
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 14,
        "name": "Blood Centre, Kasturba Gandhi Hospital",
        "location": "Delhi",
        "address": "Near Jama Masjid, Daryaganj, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Kasturba+Gandhi+Hospital+Near+Jama+Masjid%2C+Daryaganj%2C+New+Delhi",
        "inventory": {
            "A+": 58,
            "A-": 84,
            "B+": 59,
            "B-": 41,
            "AB+": 65,
            "AB-": 14,
            "O+": 90,
            "O-": 78
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 15,
        "name": "Blood Centre, Bhagat Chandra Hospital",
        "location": "Delhi",
        "address": "RZF-1/1, Mahavir Enclave, Palam, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Bhagat+Chandra+Hospital+RZF-1%2F1%2C+Mahavir+Enclave%2C+Palam%2C+New+Delhi",
        "inventory": {
            "A+": 16,
            "A-": 70,
            "B+": 23,
            "B-": 50,
            "AB+": 45,
            "AB-": 50,
            "O+": 22,
            "O-": 11
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 16,
        "name": "Blood Centre, Safdarjung Hospital",
        "location": "Delhi",
        "address": "Ring Road, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Safdarjung+Hospital+Ring+Road%2C+New+Delhi",
        "inventory": {
            "A+": 59,
            "A-": 2,
            "B+": 3,
            "B-": 48,
            "AB+": 16,
            "AB-": 33,
            "O+": 10,
            "O-": 18
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 17,
        "name": "Blood Centre, Holy Family Hospital",
        "location": "Delhi",
        "address": "Okhla Road, Jamianagar P O, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Holy+Family+Hospital+Okhla+Road%2C+Jamianagar+P+O%2C+New+Delhi",
        "inventory": {
            "A+": 46,
            "A-": 96,
            "B+": 78,
            "B-": 49,
            "AB+": 49,
            "AB-": 72,
            "O+": 55,
            "O-": 41
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 18,
        "name": "Rotary Blood Centre",
        "location": "Delhi",
        "address": "56-57, Institutional Area, Tughlakabad, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Rotary+Blood+Centre+56-57%2C+Institutional+Area%2C+Tughlakabad%2C+New+Delhi",
        "inventory": {
            "A+": 94,
            "A-": 43,
            "B+": 59,
            "B-": 91,
            "AB+": 78,
            "AB-": 81,
            "O+": 46,
            "O-": 29
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 19,
        "name": "Blood Bank, Fortis Flt.Lt. Rajan Dhall Hospital",
        "location": "Delhi",
        "address": "Sector-B, Pocket-1, Aruna Asaf Ali Marg, Vasant Kunj, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Bank%2C+Fortis+Flt.Lt.+Rajan+Dhall+Hospital+Sector-B%2C+Pocket-1%2C+Aruna+Asaf+Ali+Marg%2C+Vasant+Kunj%2C+New+Delhi",
        "inventory": {
            "A+": 94,
            "A-": 59,
            "B+": 41,
            "B-": 80,
            "AB+": 61,
            "AB-": 85,
            "O+": 34,
            "O-": 2
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 20,
        "name": "Blood Centre Sant Parmanad Hospital",
        "location": "Delhi",
        "address": "18, Shyam Nath Marg, Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre+Sant+Parmanad+Hospital+18%2C+Shyam+Nath+Marg%2C+Delhi",
        "inventory": {
            "A+": 29,
            "A-": 85,
            "B+": 27,
            "B-": 51,
            "AB+": 11,
            "AB-": 38,
            "O+": 57,
            "O-": 16
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 21,
        "name": "Blood Centre, Shree Balaji Action Medical Institute",
        "location": "Delhi",
        "address": "FC-34A-4, Paschim Vihar, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Shree+Balaji+Action+Medical+Institute+FC-34A-4%2C+Paschim+Vihar%2C+New+Delhi",
        "inventory": {
            "A+": 94,
            "A-": 95,
            "B+": 60,
            "B-": 51,
            "AB+": 83,
            "AB-": 3,
            "O+": 23,
            "O-": 78
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 22,
        "name": "Blood Centre, Fortis Hospital",
        "location": "Delhi",
        "address": "A- Block, Shalimar Bagh, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Fortis+Hospital+A-+Block%2C+Shalimar+Bagh%2C+New+Delhi",
        "inventory": {
            "A+": 64,
            "A-": 94,
            "B+": 32,
            "B-": 10,
            "AB+": 18,
            "AB-": 21,
            "O+": 61,
            "O-": 53
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 23,
        "name": "Blood Centre, Lions Blood Centre",
        "location": "Delhi",
        "address": "AK-100, Shalimar Bagh, Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Lions+Blood+Centre+AK-100%2C+Shalimar+Bagh%2C+Delhi",
        "inventory": {
            "A+": 43,
            "A-": 74,
            "B+": 45,
            "B-": 91,
            "AB+": 65,
            "AB-": 36,
            "O+": 8,
            "O-": 57
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 24,
        "name": "Blood Centre, Max Super Specialty Hospital",
        "location": "Delhi",
        "address": "2, Press Enclave Road, Saket, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre%2C+Max+Super+Specialty+Hospital+2%2C+Press+Enclave+Road%2C+Saket%2C+New+Delhi",
        "inventory": {
            "A+": 23,
            "A-": 76,
            "B+": 46,
            "B-": 9,
            "AB+": 46,
            "AB-": 69,
            "O+": 49,
            "O-": 34
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 25,
        "name": "Cardio Neuro Centre Blood Centre CNC AIIMS Delhi",
        "location": "Delhi",
        "address": "Blood Bank, C.N. Centre, AIIMS, Ansari Nagar, New Delhi",
        "googleMapsLink": "https://maps.google.com/?q=Cardio+Neuro+Centre+Blood+Centre+CNC+AIIMS+Delhi+Blood+Bank%2C+C.N.+Centre%2C+AIIMS%2C+Ansari+Nagar%2C+New+Delhi",
        "inventory": {
            "A+": 53,
            "A-": 56,
            "B+": 54,
            "B-": 36,
            "AB+": 7,
            "AB-": 28,
            "O+": 81,
            "O-": 77
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 26,
        "name": "Park Hospital (Unit Of Park Medicentre & Institution Pvt. Ltd.)",
        "location": "Gurgaon",
        "address": "Q-1 Block, South City-II, Sohna Road, Main Sector-47, Gurgaon",
        "googleMapsLink": "https://maps.google.com/?q=Park+Hospital+%28Unit+Of+Park+Medicentre+%26+Institution+Pvt.+Ltd.%29+Q-1+Block%2C+South+City-II%2C+Sohna+Road%2C+Main+Sector-47%2C+Gurgaon",
        "inventory": {
            "A+": 25,
            "A-": 36,
            "B+": 87,
            "B-": 84,
            "AB+": 32,
            "AB-": 53,
            "O+": 23,
            "O-": 0
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 27,
        "name": "Ashirwad Blood Center Gurgaon",
        "location": "Gurgaon",
        "address": "306, Opp. Radha Swami Satsang Bhawan, 1st Floor, Sector 37, Umang Super Speciality Hospital, Gurgaon",
        "googleMapsLink": "https://maps.google.com/?q=Ashirwad+Blood+Center+Gurgaon+306%2C+Opp.+Radha+Swami+Satsang+Bhawan%2C+1st+Floor%2C+Sector+37%2C+Umang+Super+Speciality+Hospital%2C+Gurgaon",
        "inventory": {
            "A+": 58,
            "A-": 39,
            "B+": 8,
            "B-": 79,
            "AB+": 28,
            "AB-": 33,
            "O+": 11,
            "O-": 21
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 28,
        "name": "Narayana Super Speciality Hospital Blood Centre",
        "location": "Gurgaon",
        "address": "55th Floor, Plot No. 3201, Block-V, DLF Phase III, Sector 24, Gurugram",
        "googleMapsLink": "https://maps.google.com/?q=Narayana+Super+Speciality+Hospital+Blood+Centre+55th+Floor%2C+Plot+No.+3201%2C+Block-V%2C+DLF+Phase+III%2C+Sector+24%2C+Gurugram",
        "inventory": {
            "A+": 61,
            "A-": 37,
            "B+": 57,
            "B-": 17,
            "AB+": 22,
            "AB-": 19,
            "O+": 1,
            "O-": 19
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 29,
        "name": "The Medanta Blood Centre",
        "location": "Gurgaon",
        "address": "CH Baktawar Singh Rd, Medicity, Islampur Colony, Sector 38, Gurgaon",
        "googleMapsLink": "https://maps.google.com/?q=The+Medanta+Blood+Centre+CH+Baktawar+Singh+Rd%2C+Medicity%2C+Islampur+Colony%2C+Sector+38%2C+Gurgaon",
        "inventory": {
            "A+": 96,
            "A-": 56,
            "B+": 3,
            "B-": 73,
            "AB+": 1,
            "AB-": 80,
            "O+": 89,
            "O-": 85
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 30,
        "name": "Rotary Blood Centre Gurugram",
        "location": "Gurgaon",
        "address": "Village Kadipur, Pataudi Road, Gurugram",
        "googleMapsLink": "https://maps.google.com/?q=Rotary+Blood+Centre+Gurugram+Village+Kadipur%2C+Pataudi+Road%2C+Gurugram",
        "inventory": {
            "A+": 89,
            "A-": 20,
            "B+": 7,
            "B-": 19,
            "AB+": 30,
            "AB-": 18,
            "O+": 31,
            "O-": 27
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 31,
        "name": "Fortis Memorial Research Institute",
        "location": "Gurgaon",
        "address": "Sector-44, Institutional Area, Gurgaon",
        "googleMapsLink": "https://maps.google.com/?q=Fortis+Memorial+Research+Institute+Sector-44%2C+Institutional+Area%2C+Gurgaon",
        "inventory": {
            "A+": 71,
            "A-": 16,
            "B+": 6,
            "B-": 46,
            "AB+": 88,
            "AB-": 38,
            "O+": 58,
            "O-": 4
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 32,
        "name": "Blood Centre PK Healthcare Pvt. Ltd. (Sanar International Hospitals)",
        "location": "Gurgaon",
        "address": "Sanar International Hospital, Golf Course Road, Sector-53, Gurgaon",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre+PK+Healthcare+Pvt.+Ltd.+%28Sanar+International+Hospitals%29+Sanar+International+Hospital%2C+Golf+Course+Road%2C+Sector-53%2C+Gurgaon",
        "inventory": {
            "A+": 77,
            "A-": 100,
            "B+": 53,
            "B-": 83,
            "AB+": 11,
            "AB-": 92,
            "O+": 26,
            "O-": 18
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 33,
        "name": "Umkal Health Care Pvt. Ltd.",
        "location": "Gurgaon",
        "address": "Metro Hospital by Park, H Block, Palam Vihar, Gurgaon",
        "googleMapsLink": "https://maps.google.com/?q=Umkal+Health+Care+Pvt.+Ltd.+Metro+Hospital+by+Park%2C+H+Block%2C+Palam+Vihar%2C+Gurgaon",
        "inventory": {
            "A+": 28,
            "A-": 17,
            "B+": 13,
            "B-": 52,
            "AB+": 11,
            "AB-": 63,
            "O+": 84,
            "O-": 64
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 34,
        "name": "Signature Hospital Blood Centre",
        "location": "Gurgaon",
        "address": "The Signature Hospital, Sector 37D, BPTP, Dwarka Expressway, Gurugram",
        "googleMapsLink": "https://maps.google.com/?q=Signature+Hospital+Blood+Centre+The+Signature+Hospital%2C+Sector+37D%2C+BPTP%2C+Dwarka+Expressway%2C+Gurugram",
        "inventory": {
            "A+": 0,
            "A-": 56,
            "B+": 84,
            "B-": 93,
            "AB+": 79,
            "AB-": 22,
            "O+": 91,
            "O-": 46
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 35,
        "name": "Manipal Hospital Blood Centre",
        "location": "Gurgaon",
        "address": "Block-F, Gol Chakkar, Palam Vihar, Gurgaon",
        "googleMapsLink": "https://maps.google.com/?q=Manipal+Hospital+Blood+Centre+Block-F%2C+Gol+Chakkar%2C+Palam+Vihar%2C+Gurgaon",
        "inventory": {
            "A+": 58,
            "A-": 84,
            "B+": 90,
            "B-": 7,
            "AB+": 35,
            "AB-": 56,
            "O+": 69,
            "O-": 56
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 36,
        "name": "SGT Medical College, Hospital & Research Institute",
        "location": "Gurgaon",
        "address": "VPO-Budhera, Near Sultanpur Lake, Badli-Gurugram Road, Gurugram",
        "googleMapsLink": "https://maps.google.com/?q=SGT+Medical+College%2C+Hospital+%26+Research+Institute+VPO-Budhera%2C+Near+Sultanpur+Lake%2C+Badli-Gurugram+Road%2C+Gurugram",
        "inventory": {
            "A+": 97,
            "A-": 77,
            "B+": 32,
            "B-": 31,
            "AB+": 29,
            "AB-": 76,
            "O+": 61,
            "O-": 97
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 37,
        "name": "Paras Hospital Blood Centre",
        "location": "Gurgaon",
        "address": "C-1, Sushant Lok Phase-1, Sector-43, Gurgaon",
        "googleMapsLink": "https://maps.google.com/?q=Paras+Hospital+Blood+Centre+C-1%2C+Sushant+Lok+Phase-1%2C+Sector-43%2C+Gurgaon",
        "inventory": {
            "A+": 65,
            "A-": 32,
            "B+": 70,
            "B-": 63,
            "AB+": 60,
            "AB-": 31,
            "O+": 95,
            "O-": 15
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 38,
        "name": "Lions Blood Bank",
        "location": "Gurgaon",
        "address": "Golf Course Road, Sushant Lok-II, Sector 56, Gurugram",
        "googleMapsLink": "https://maps.google.com/?q=Lions+Blood+Bank+Golf+Course+Road%2C+Sushant+Lok-II%2C+Sector+56%2C+Gurugram",
        "inventory": {
            "A+": 90,
            "A-": 25,
            "B+": 46,
            "B-": 59,
            "AB+": 76,
            "AB-": 4,
            "O+": 22,
            "O-": 56
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 39,
        "name": "Artemis Hospital Blood Centre",
        "location": "Gurgaon",
        "address": "Artemis Hospital, Sector-51, Gurugram",
        "googleMapsLink": "https://maps.google.com/?q=Artemis+Hospital+Blood+Centre+Artemis+Hospital%2C+Sector-51%2C+Gurugram",
        "inventory": {
            "A+": 26,
            "A-": 14,
            "B+": 67,
            "B-": 31,
            "AB+": 28,
            "AB-": 53,
            "O+": 13,
            "O-": 18
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 40,
        "name": "General Hospital Blood Centre Gurgaon",
        "location": "Gurgaon",
        "address": "Manohar Nagar, Sector 10, Sector 10 Civil Hospital, Gurgaon",
        "googleMapsLink": "https://maps.google.com/?q=General+Hospital+Blood+Centre+Gurgaon+Manohar+Nagar%2C+Sector+10%2C+Sector+10+Civil+Hospital%2C+Gurgaon",
        "inventory": {
            "A+": 13,
            "A-": 13,
            "B+": 19,
            "B-": 18,
            "AB+": 7,
            "AB-": 61,
            "O+": 46,
            "O-": 64
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 41,
        "name": "Blood CENTER M.M.G. HOSPITAL",
        "location": "Ghaziabad",
        "address": "Distt. MMG Hospital, GT Road, Ghanta Ghar, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Blood+CENTER+M.M.G.+HOSPITAL+Distt.+MMG+Hospital%2C+GT+Road%2C+Ghanta+Ghar%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 58,
            "A-": 78,
            "B+": 3,
            "B-": 70,
            "AB+": 59,
            "AB-": 15,
            "O+": 93,
            "O-": 61
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 42,
        "name": "Yashoda Superspeciality Hospital & Cancer Institutes",
        "location": "Ghaziabad",
        "address": "Lower Ground Floor, B-1, B-2 P Block, Commercial Complex, Sanjay Nagar, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Yashoda+Superspeciality+Hospital+%26+Cancer+Institutes+Lower+Ground+Floor%2C+B-1%2C+B-2+P+Block%2C+Commercial+Complex%2C+Sanjay+Nagar%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 18,
            "A-": 22,
            "B+": 94,
            "B-": 1,
            "AB+": 87,
            "AB-": 24,
            "O+": 54,
            "O-": 30
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 43,
        "name": "DS Charitable Blood Centre",
        "location": "Ghaziabad",
        "address": "NH-58, Meerut Road, Opp. Rohan Motors (Nexa Showroom), Near Lok Manya Tilak Inter College, Morta, District Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=DS+Charitable+Blood+Centre+NH-58%2C+Meerut+Road%2C+Opp.+Rohan+Motors+%28Nexa+Showroom%29%2C+Near+Lok+Manya+Tilak+Inter+College%2C+Morta%2C+District+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 36,
            "A-": 15,
            "B+": 15,
            "B-": 52,
            "AB+": 59,
            "AB-": 98,
            "O+": 87,
            "O-": 81
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 44,
        "name": "Blood Centre Yashoda Hospital Nehru Nagar",
        "location": "Ghaziabad",
        "address": "Yashoda Hospital & Research Centre Ltd., III-M, Nehru Nagar, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre+Yashoda+Hospital+Nehru+Nagar+Yashoda+Hospital+%26+Research+Centre+Ltd.%2C+III-M%2C+Nehru+Nagar%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 51,
            "A-": 17,
            "B+": 93,
            "B-": 39,
            "AB+": 61,
            "AB-": 29,
            "O+": 35,
            "O-": 50
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 45,
        "name": "Blood Centre Yashoda Hospital Kaushambi",
        "location": "Ghaziabad",
        "address": "Yashoda Hospital & Research Centre Ltd., H-1, Kaushambi, Near Anand Vihar ISBT, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre+Yashoda+Hospital+Kaushambi+Yashoda+Hospital+%26+Research+Centre+Ltd.%2C+H-1%2C+Kaushambi%2C+Near+Anand+Vihar+ISBT%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 97,
            "A-": 86,
            "B+": 81,
            "B-": 38,
            "AB+": 62,
            "AB-": 52,
            "O+": 42,
            "O-": 83
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 46,
        "name": "Rama Medical College Hospital & Research Centre Blood Centre",
        "location": "Ghaziabad",
        "address": "Rama Medical College & Research Centre (Run By Rama Educational Society), Rama Delhi N.H.-24, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Rama+Medical+College+Hospital+%26+Research+Centre+Blood+Centre+Rama+Medical+College+%26+Research+Centre+%28Run+By+Rama+Educational+Society%29%2C+Rama+Delhi+N.H.-24%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 18,
            "A-": 41,
            "B+": 59,
            "B-": 53,
            "AB+": 16,
            "AB-": 43,
            "O+": 44,
            "O-": 82
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 47,
        "name": "Loni Charitable Blood Centre",
        "location": "Ghaziabad",
        "address": "Plot No.1, Arya Nagar, DPS Complex, Main Delhi Saharanpur Road, Loni, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Loni+Charitable+Blood+Centre+Plot+No.1%2C+Arya+Nagar%2C+DPS+Complex%2C+Main+Delhi+Saharanpur+Road%2C+Loni%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 17,
            "A-": 66,
            "B+": 85,
            "B-": 91,
            "AB+": 23,
            "AB-": 15,
            "O+": 94,
            "O-": 55
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 48,
        "name": "Blood Centre District Hospital MMG",
        "location": "Ghaziabad",
        "address": "District Hospital, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre+District+Hospital+MMG+District+Hospital%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 55,
            "A-": 7,
            "B+": 87,
            "B-": 77,
            "AB+": 36,
            "AB-": 86,
            "O+": 10,
            "O-": 81
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 49,
        "name": "Blood Centre Santosh Medical College",
        "location": "Ghaziabad",
        "address": "Santosh Medical & Dental College, Hospital No.1, Ambedkar Nagar Road, Opposite Old Bus Stand, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre+Santosh+Medical+College+Santosh+Medical+%26+Dental+College%2C+Hospital+No.1%2C+Ambedkar+Nagar+Road%2C+Opposite+Old+Bus+Stand%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 29,
            "A-": 54,
            "B+": 6,
            "B-": 16,
            "AB+": 82,
            "AB-": 36,
            "O+": 77,
            "O-": 5
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 50,
        "name": "Ghaziabad Blood Centre",
        "location": "Ghaziabad",
        "address": "(Kesar Charitable Trust), Maliwara, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Ghaziabad+Blood+Centre+%28Kesar+Charitable+Trust%29%2C+Maliwara%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 64,
            "A-": 23,
            "B+": 24,
            "B-": 49,
            "AB+": 19,
            "AB-": 51,
            "O+": 83,
            "O-": 84
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 51,
        "name": "Hind Charitable Blood Centre",
        "location": "Ghaziabad",
        "address": "Plot No. H-1, 1st Floor, Pratap Vihar, Vijay Nagar, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Hind+Charitable+Blood+Centre+Plot+No.+H-1%2C+1st+Floor%2C+Pratap+Vihar%2C+Vijay+Nagar%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 34,
            "A-": 71,
            "B+": 76,
            "B-": 80,
            "AB+": 51,
            "AB-": 3,
            "O+": 60,
            "O-": 8
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 52,
        "name": "V Care Blood Centre",
        "location": "Ghaziabad",
        "address": "2, Block A, Sector 2, Rajindra Nagar, Ghaziabad, Uttar Pradesh 201005",
        "googleMapsLink": "https://maps.google.com/?q=V+Care+Blood+Centre+2%2C+Block+A%2C+Sector+2%2C+Rajindra+Nagar%2C+Ghaziabad%2C+Uttar+Pradesh+201005",
        "inventory": {
            "A+": 98,
            "A-": 29,
            "B+": 75,
            "B-": 95,
            "AB+": 98,
            "AB-": 32,
            "O+": 28,
            "O-": 85
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 53,
        "name": "Sarvodaya Hospital Blood Centre",
        "location": "Ghaziabad",
        "address": "D-3, Kavi Nagar Industrial Area, Near Diamond Flyover, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Sarvodaya+Hospital+Blood+Centre+D-3%2C+Kavi+Nagar+Industrial+Area%2C+Near+Diamond+Flyover%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 98,
            "A-": 1,
            "B+": 34,
            "B-": 82,
            "AB+": 3,
            "AB-": 75,
            "O+": 90,
            "O-": 9
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 54,
        "name": "Shalimar Garden Charitable Blood Centre",
        "location": "Ghaziabad",
        "address": "G2, Plot 128, Shalimar Garden Extn 1, 60 Foota Road, Sahibabad, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Shalimar+Garden+Charitable+Blood+Centre+G2%2C+Plot+128%2C+Shalimar+Garden+Extn+1%2C+60+Foota+Road%2C+Sahibabad%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 62,
            "A-": 10,
            "B+": 64,
            "B-": 38,
            "AB+": 17,
            "AB-": 21,
            "O+": 88,
            "O-": 87
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 55,
        "name": "Blood Centre Narendra Mohan Hospital",
        "location": "Ghaziabad",
        "address": "Narendra Mohan Hospital & Research Centre, Mohan Nagar, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre+Narendra+Mohan+Hospital+Narendra+Mohan+Hospital+%26+Research+Centre%2C+Mohan+Nagar%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 52,
            "A-": 31,
            "B+": 90,
            "B-": 35,
            "AB+": 13,
            "AB-": 66,
            "O+": 17,
            "O-": 36
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 56,
        "name": "IDST MAYO Hospital & Blood Centre",
        "location": "Ghaziabad",
        "address": "Delhi Meerut Road, Kadrabad, Modinagar, District Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=IDST+MAYO+Hospital+%26+Blood+Centre+Delhi+Meerut+Road%2C+Kadrabad%2C+Modinagar%2C+District+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 27,
            "A-": 30,
            "B+": 50,
            "B-": 57,
            "AB+": 46,
            "AB-": 87,
            "O+": 25,
            "O-": 51
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 57,
        "name": "Sangam Charitable Blood Centre",
        "location": "Ghaziabad",
        "address": "1st Floor, Krishna Complex, 19 Rakesh Marg, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Sangam+Charitable+Blood+Centre+1st+Floor%2C+Krishna+Complex%2C+19+Rakesh+Marg%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 93,
            "A-": 55,
            "B+": 27,
            "B-": 14,
            "AB+": 23,
            "AB-": 12,
            "O+": 15,
            "O-": 43
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 58,
        "name": "Bhagwan Buddha Charitable Blood Centre",
        "location": "Ghaziabad",
        "address": "Plot No. 1196, Sector-5, Vasundhara, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Bhagwan+Buddha+Charitable+Blood+Centre+Plot+No.+1196%2C+Sector-5%2C+Vasundhara%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 17,
            "A-": 10,
            "B+": 47,
            "B-": 41,
            "AB+": 19,
            "AB-": 2,
            "O+": 11,
            "O-": 29
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 59,
        "name": "Bharat Sewa Charitable Blood Centre",
        "location": "Ghaziabad",
        "address": "AST 2nd Floor, Plot No 74-75, Ganga Enclave, Loni, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Bharat+Sewa+Charitable+Blood+Centre+AST+2nd+Floor%2C+Plot+No+74-75%2C+Ganga+Enclave%2C+Loni%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 92,
            "A-": 24,
            "B+": 56,
            "B-": 80,
            "AB+": 7,
            "AB-": 97,
            "O+": 26,
            "O-": 49
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 60,
        "name": "Shanti Gopal Hospital Blood Centre",
        "location": "Ghaziabad",
        "address": "Shanti Gopal Hospital Blood Bank, Plot No. N.H.-1, Ahinsa Khand-II, Indirapuram, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Shanti+Gopal+Hospital+Blood+Centre+Shanti+Gopal+Hospital+Blood+Bank%2C+Plot+No.+N.H.-1%2C+Ahinsa+Khand-II%2C+Indirapuram%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 80,
            "A-": 51,
            "B+": 89,
            "B-": 83,
            "AB+": 38,
            "AB-": 98,
            "O+": 3,
            "O-": 70
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 61,
        "name": "R.K. Charitable Blood Centre",
        "location": "Ghaziabad",
        "address": "Shop Municipal No. 415, Delhi Meerut Road, Adarsh Nagar, Modinagar, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=R.K.+Charitable+Blood+Centre+Shop+Municipal+No.+415%2C+Delhi+Meerut+Road%2C+Adarsh+Nagar%2C+Modinagar%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 100,
            "A-": 45,
            "B+": 0,
            "B-": 80,
            "AB+": 86,
            "AB-": 78,
            "O+": 43,
            "O-": 21
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 62,
        "name": "Life Line Blood Centre",
        "location": "Ghaziabad",
        "address": "III-B2, Nehru Nagar, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Life+Line+Blood+Centre+III-B2%2C+Nehru+Nagar%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 6,
            "A-": 83,
            "B+": 49,
            "B-": 11,
            "AB+": 32,
            "AB-": 99,
            "O+": 71,
            "O-": 96
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 63,
        "name": "Vardan Multi Specialty Hospital",
        "location": "Ghaziabad",
        "address": "Garhi Sikroad, Opp. Guldhar, NH-58, Meerut Road, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Vardan+Multi+Specialty+Hospital+Garhi+Sikroad%2C+Opp.+Guldhar%2C+NH-58%2C+Meerut+Road%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 99,
            "A-": 32,
            "B+": 98,
            "B-": 92,
            "AB+": 60,
            "AB-": 47,
            "O+": 55,
            "O-": 89
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 64,
        "name": "Max Super Speciality Hospital Blood Centre",
        "location": "Ghaziabad",
        "address": "W-3, Sector-1, Vaishali, Ghaziabad, Uttar Pradesh",
        "googleMapsLink": "https://maps.google.com/?q=Max+Super+Speciality+Hospital+Blood+Centre+W-3%2C+Sector-1%2C+Vaishali%2C+Ghaziabad%2C+Uttar+Pradesh",
        "inventory": {
            "A+": 15,
            "A-": 67,
            "B+": 6,
            "B-": 18,
            "AB+": 100,
            "AB-": 72,
            "O+": 54,
            "O-": 89
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 65,
        "name": "PAWAN HOSPITAL BLOOD CENTRE",
        "location": "Faridabad",
        "address": "Samaypur Road, Sector 56, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=PAWAN+HOSPITAL+BLOOD+CENTRE+Samaypur+Road%2C+Sector+56%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 74,
            "A-": 96,
            "B+": 66,
            "B-": 14,
            "AB+": 85,
            "AB-": 28,
            "O+": 9,
            "O-": 51
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 66,
        "name": "Blood Centre Fortis Hospital Ltd. Faridabad",
        "location": "Faridabad",
        "address": "Neelam Bata Road, Opp. Neelam Cinema, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=Blood+Centre+Fortis+Hospital+Ltd.+Faridabad+Neelam+Bata+Road%2C+Opp.+Neelam+Cinema%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 63,
            "A-": 68,
            "B+": 27,
            "B-": 31,
            "AB+": 67,
            "AB-": 11,
            "O+": 6,
            "O-": 37
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 67,
        "name": "Esic Blood Centre Medical College And Hospital",
        "location": "Faridabad",
        "address": "NH-3, NIT Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=Esic+Blood+Centre+Medical+College+And+Hospital+NH-3%2C+NIT+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 3,
            "A-": 77,
            "B+": 12,
            "B-": 42,
            "AB+": 90,
            "AB-": 76,
            "O+": 54,
            "O-": 9
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 68,
        "name": "Rotary Blood Centre Charitable Trust",
        "location": "Faridabad",
        "address": "Clinic Site No. 2, Plot No. 2, Sector-9, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=Rotary+Blood+Centre+Charitable+Trust+Clinic+Site+No.+2%2C+Plot+No.+2%2C+Sector-9%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 54,
            "A-": 48,
            "B+": 98,
            "B-": 95,
            "AB+": 55,
            "AB-": 93,
            "O+": 22,
            "O-": 15
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 69,
        "name": "B.K. General Hospital",
        "location": "Faridabad",
        "address": "New Industrial Township, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=B.K.+General+Hospital+New+Industrial+Township%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 12,
            "A-": 13,
            "B+": 54,
            "B-": 40,
            "AB+": 80,
            "AB-": 19,
            "O+": 38,
            "O-": 35
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 70,
        "name": "SSB Heart and Multispeciality Hospital",
        "location": "Faridabad",
        "address": "Plot No. 69, Mathura Road, Near Neelam Flyover, Sector 20 A, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=SSB+Heart+and+Multispeciality+Hospital+Plot+No.+69%2C+Mathura+Road%2C+Near+Neelam+Flyover%2C+Sector+20+A%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 50,
            "A-": 27,
            "B+": 98,
            "B-": 89,
            "AB+": 13,
            "AB-": 0,
            "O+": 42,
            "O-": 3
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 71,
        "name": "Amrita Institute of Medical Sciences Research Centre",
        "location": "Faridabad",
        "address": "Sector-88, Amritananda Mayi Marg, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=Amrita+Institute+of+Medical+Sciences+Research+Centre+Sector-88%2C+Amritananda+Mayi+Marg%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 66,
            "A-": 37,
            "B+": 42,
            "B-": 6,
            "AB+": 65,
            "AB-": 100,
            "O+": 74,
            "O-": 54
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 72,
        "name": "Sant Bhagat Singh Ji Maharaj Charitable Blood Centre",
        "location": "Faridabad",
        "address": "1K/9A, Kalyan Singh Chowk, N.I.T. Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=Sant+Bhagat+Singh+Ji+Maharaj+Charitable+Blood+Centre+1K%2F9A%2C+Kalyan+Singh+Chowk%2C+N.I.T.+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 87,
            "A-": 61,
            "B+": 54,
            "B-": 10,
            "AB+": 35,
            "AB-": 3,
            "O+": 68,
            "O-": 87
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 73,
        "name": "Divine Charitable Blood Centre",
        "location": "Faridabad",
        "address": "1st Floor, 13 BP, Neelam Bata Road, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=Divine+Charitable+Blood+Centre+1st+Floor%2C+13+BP%2C+Neelam+Bata+Road%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 15,
            "A-": 42,
            "B+": 76,
            "B-": 2,
            "AB+": 39,
            "AB-": 82,
            "O+": 40,
            "O-": 79
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 74,
        "name": "Accord Superspeciality Hospital",
        "location": "Faridabad",
        "address": "Sector 86, Budena Village, Greater Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=Accord+Superspeciality+Hospital+Sector+86%2C+Budena+Village%2C+Greater+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 72,
            "A-": 5,
            "B+": 67,
            "B-": 100,
            "AB+": 32,
            "AB-": 63,
            "O+": 63,
            "O-": 91
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 75,
        "name": "Metro Heart Institute",
        "location": "Faridabad",
        "address": "Sector-16A, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=Metro+Heart+Institute+Sector-16A%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 53,
            "A-": 92,
            "B+": 53,
            "B-": 33,
            "AB+": 29,
            "AB-": 99,
            "O+": 93,
            "O-": 41
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 76,
        "name": "Supreme Blood Centre",
        "location": "Faridabad",
        "address": "Basement -1, Supreme Hospital, Eros Garden, Charmwood, Village- Surajkund, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=Supreme+Blood+Centre+Basement+-1%2C+Supreme+Hospital%2C+Eros+Garden%2C+Charmwood%2C+Village-+Surajkund%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 55,
            "A-": 29,
            "B+": 84,
            "B-": 47,
            "AB+": 17,
            "AB-": 89,
            "O+": 2,
            "O-": 4
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 77,
        "name": "QRG Medicare Ltd. Blood Centre",
        "location": "Faridabad",
        "address": "C-Block, 1st Floor, Plot No. 1, Sector-16, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=QRG+Medicare+Ltd.+Blood+Centre+C-Block%2C+1st+Floor%2C+Plot+No.+1%2C+Sector-16%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 87,
            "A-": 5,
            "B+": 33,
            "B-": 66,
            "AB+": 47,
            "AB-": 9,
            "O+": 12,
            "O-": 60
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 78,
        "name": "Asian Institute Of Medical Sciences",
        "location": "Faridabad",
        "address": "Badkhal Flyover Road, Sector 21A, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=Asian+Institute+Of+Medical+Sciences+Badkhal+Flyover+Road%2C+Sector+21A%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 12,
            "A-": 92,
            "B+": 46,
            "B-": 14,
            "AB+": 31,
            "AB-": 61,
            "O+": 36,
            "O-": 52
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 79,
        "name": "Sarvodaya Hospital and Research Centre",
        "location": "Faridabad",
        "address": "YMCA Road, Sector 8, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=Sarvodaya+Hospital+and+Research+Centre+YMCA+Road%2C+Sector+8%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 28,
            "A-": 100,
            "B+": 22,
            "B-": 23,
            "AB+": 100,
            "AB-": 88,
            "O+": 32,
            "O-": 45
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 80,
        "name": "Park Hospital",
        "location": "Faridabad",
        "address": "J-Block, Sector-10, Opposite Court, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=Park+Hospital+J-Block%2C+Sector-10%2C+Opposite+Court%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 60,
            "A-": 64,
            "B+": 70,
            "B-": 12,
            "AB+": 98,
            "AB-": 76,
            "O+": 61,
            "O-": 97
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    },
    {
        "id": 81,
        "name": "Al Falah School Of Medical Science & Research Centre",
        "location": "Faridabad",
        "address": "VPO- Dhauj, Faridabad, Haryana",
        "googleMapsLink": "https://maps.google.com/?q=Al+Falah+School+Of+Medical+Science+%26+Research+Centre+VPO-+Dhauj%2C+Faridabad%2C+Haryana",
        "inventory": {
            "A+": 54,
            "A-": 37,
            "B+": 70,
            "B-": 32,
            "AB+": 3,
            "AB-": 36,
            "O+": 95,
            "O-": 31
        },
        "coordinates": {
            "lat": 28.6139,
            "lng": 77.209
        }
    }
];