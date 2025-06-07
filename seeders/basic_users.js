/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('basic_users').del();
  await knex('basic_users').insert([
    {
      id: 1,
      name: 'Andi Pratama',
      work_experiences: JSON.stringify([
        {
          role: 'Backend engineer',
          company: 'Gojek',
          industry: 'Tech Finance',
          startedAt: '2015-01-01',
          endedAt: '2017-12-31'
        },
        {
          role: 'Software engineer (Node.js)',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2018-01-01',
          endedAt: '2020-06-30'
        },
        {
          role: 'Senior backend developer',
          company: 'OVO',
          industry: 'Fintech',
          startedAt: '2020-07-01',
          endedAt: '2022-12-31'
        }
      ])
    },
    {
      id: 2,
      name: 'Budi Santoso',
      work_experiences: JSON.stringify([
        {
          role: 'Backend engineer',
          company: 'Traveloka',
          industry: 'Travel',
          startedAt: '2014-03-01',
          endedAt: '2016-12-31'
        },
        {
          role: 'Software engineer (Golang)',
          company: 'Bukalapak',
          industry: 'E-commerce',
          startedAt: '2017-01-01',
          endedAt: '2019-12-31'
        },
        {
          role: 'Backend architect',
          company: 'Shopee',
          industry: 'E-commerce',
          startedAt: '2020-01-01',
          endedAt: '2022-12-31'
        }
      ])
    },
    {
      id: 3,
      name: 'Citra Dewi',
      work_experiences: JSON.stringify([
        {
          role: 'Backend engineer',
          company: 'Dana',
          industry: 'Fintech',
          startedAt: '2016-01-01',
          endedAt: '2018-12-31'
        },
        {
          role: 'Senior backend developer',
          company: 'LinkAja',
          industry: 'Fintech',
          startedAt: '2019-01-01',
          endedAt: '2021-06-30'
        },
        {
          role: 'Backend architect',
          company: 'Jenius',
          industry: 'Banking',
          startedAt: '2021-07-01',
          endedAt: '2023-12-31'
        }
      ])
    },
    {
      id: 4,
      name: 'Dewi Lestari',
      work_experiences: JSON.stringify([
        {
          role: 'Backend engineer',
          company: 'Mandiri',
          industry: 'Banking',
          startedAt: '2013-01-01',
          endedAt: '2015-12-31'
        },
        {
          role: 'Software engineer (Java)',
          company: 'BRI',
          industry: 'Banking',
          startedAt: '2016-01-01',
          endedAt: '2018-12-31'
        },
        {
          role: 'Senior backend developer',
          company: 'BNI',
          industry: 'Banking',
          startedAt: '2019-01-01',
          endedAt: '2021-12-31'
        }
      ])
    },
    {
      id: 5,
      name: 'Eka Putra',
      work_experiences: JSON.stringify([
        {
          role: 'Backend engineer',
          company: 'Blibli',
          industry: 'E-commerce',
          startedAt: '2012-01-01',
          endedAt: '2014-12-31'
        },
        {
          role: 'Backend developer',
          company: 'Bukalapak',
          industry: 'E-commerce',
          startedAt: '2015-01-01',
          endedAt: '2017-12-31'
        },
        {
          role: 'Backend architect',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2018-01-01',
          endedAt: '2020-12-31'
        }
      ])
    },
    {
      id: 6,
      name: 'Fajar Hidayat',
      work_experiences: JSON.stringify([
        {
          role: 'Frontend engineer',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2015-01-01',
          endedAt: '2017-12-31'
        },
        {
          role: 'React developer',
          company: 'Traveloka',
          industry: 'Travel',
          startedAt: '2018-01-01',
          endedAt: '2020-12-31'
        },
        {
          role: 'Senior frontend engineer',
          company: 'Bukalapak',
          industry: 'E-commerce',
          startedAt: '2021-01-01',
          endedAt: '2023-12-31'
        }
      ])
    },
    {
      id: 7,
      name: 'Gita Sari',
      work_experiences: JSON.stringify([
        {
          role: 'UI/UX designer',
          company: 'Gojek',
          industry: 'Tech Finance',
          startedAt: '2014-01-01',
          endedAt: '2016-12-31'
        },
        {
          role: 'Product designer',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2017-01-01',
          endedAt: '2019-12-31'
        },
        {
          role: 'UX researcher',
          company: 'Traveloka',
          industry: 'Travel',
          startedAt: '2020-01-01',
          endedAt: '2022-12-31'
        }
      ])
    },
    {
      id: 8,
      name: 'Hadi Prabowo',
      work_experiences: JSON.stringify([
        {
          role: 'Product manager',
          company: 'OVO',
          industry: 'Fintech',
          startedAt: '2013-01-01',
          endedAt: '2015-12-31'
        },
        {
          role: 'Technical product manager',
          company: 'Dana',
          industry: 'Fintech',
          startedAt: '2016-01-01',
          endedAt: '2018-12-31'
        },
        {
          role: 'Product owner',
          company: 'LinkAja',
          industry: 'Fintech',
          startedAt: '2019-01-01',
          endedAt: '2021-12-31'
        }
      ])
    },
    {
      id: 9,
      name: 'Indra Wijaya',
      work_experiences: JSON.stringify([
        {
          role: 'Frontend engineer',
          company: 'Shopee',
          industry: 'E-commerce',
          startedAt: '2012-01-01',
          endedAt: '2014-12-31'
        },
        {
          role: 'Vue.js developer',
          company: 'Blibli',
          industry: 'E-commerce',
          startedAt: '2015-01-01',
          endedAt: '2017-12-31'
        },
        {
          role: 'UI developer',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2018-01-01',
          endedAt: '2020-12-31'
        }
      ])
    },
    {
      id: 10,
      name: 'Joko Susilo',
      work_experiences: JSON.stringify([
        {
          role: 'UI/UX designer',
          company: 'Traveloka',
          industry: 'Travel',
          startedAt: '2013-01-01',
          endedAt: '2015-12-31'
        },
        {
          role: 'Interaction designer',
          company: 'Bukalapak',
          industry: 'E-commerce',
          startedAt: '2016-01-01',
          endedAt: '2018-12-31'
        },
        {
          role: 'UX strategist',
          company: 'Shopee',
          industry: 'E-commerce',
          startedAt: '2019-01-01',
          endedAt: '2021-12-31'
        }
      ])
    },
    {
      id: 11,
      name: 'Kiki Amelia',
      work_experiences: JSON.stringify([
        {
          role: 'Backend engineer',
          company: 'Gojek',
          industry: 'Tech Finance',
          startedAt: '2011-01-01',
          endedAt: '2013-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2014-01-01',
          endedAt: '2016-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'Traveloka',
          industry: 'Travel',
          startedAt: '2017-01-01',
          endedAt: '2019-12-31'
        }
      ])
    },
    {
      id: 12,
      name: 'Lina Marlina',
      work_experiences: JSON.stringify([
        {
          role: 'Backend engineer',
          company: 'OVO',
          industry: 'Fintech',
          startedAt: '2012-01-01',
          endedAt: '2014-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'Dana',
          industry: 'Fintech',
          startedAt: '2015-01-01',
          endedAt: '2017-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'LinkAja',
          industry: 'Fintech',
          startedAt: '2018-01-01',
          endedAt: '2020-12-31'
        }
      ])
    },
    {
      id: 13,
      name: 'Maya Sari',
      work_experiences: JSON.stringify([
        {
          role: 'Backend engineer',
          company: 'Mandiri',
          industry: 'Banking',
          startedAt: '2013-01-01',
          endedAt: '2015-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'BRI',
          industry: 'Banking',
          startedAt: '2016-01-01',
          endedAt: '2018-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'BNI',
          industry: 'Banking',
          startedAt: '2019-01-01',
          endedAt: '2021-12-31'
        }
      ])
    },
    {
      id: 14,
      name: 'Nina Kurnia',
      work_experiences: JSON.stringify([
        {
          role: 'Backend engineer',
          company: 'Blibli',
          industry: 'E-commerce',
          startedAt: '2012-01-01',
          endedAt: '2014-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'Bukalapak',
          industry: 'E-commerce',
          startedAt: '2015-01-01',
          endedAt: '2017-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2018-01-01',
          endedAt: '2020-12-31'
        }
      ])
    },
    {
      id: 15,
      name: 'Oscar Prabowo',
      work_experiences: JSON.stringify([
        {
          role: 'Frontend engineer',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2015-01-01',
          endedAt: '2017-12-31'
        },
        {
          role: 'React developer',
          company: 'Traveloka',
          industry: 'Travel',
          startedAt: '2018-01-01',
          endedAt: '2020-12-31'
        },
        {
          role: 'Senior frontend engineer',
          company: 'Bukalapak',
          industry: 'E-commerce',
          startedAt: '2021-01-01',
          endedAt: '2023-12-31'
        }
      ])
    },
    {
      id: 16,
      name: 'Putri Ayu',
      work_experiences: JSON.stringify([
        {
          role: 'UI/UX designer',
          company: 'Gojek',
          industry: 'Tech Finance',
          startedAt: '2014-01-01',
          endedAt: '2016-12-31'
        },
        {
          role: 'Product designer',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2017-01-01',
          endedAt: '2019-12-31'
        },
        {
          role: 'UX researcher',
          company: 'Traveloka',
          industry: 'Travel',
          startedAt: '2020-01-01',
          endedAt: '2022-12-31'
        }
      ])
    },
    {
      id: 17,
      name: 'Qori Ramadhan',
      work_experiences: JSON.stringify([
        {
          role: 'Product manager',
          company: 'OVO',
          industry: 'Fintech',
          startedAt: '2013-01-01',
          endedAt: '2015-12-31'
        },
        {
          role: 'Technical product manager',
          company: 'Dana',
          industry: 'Fintech',
          startedAt: '2016-01-01',
          endedAt: '2018-12-31'
        },
        {
          role: 'Product owner',
          company: 'LinkAja',
          industry: 'Fintech',
          startedAt: '2019-01-01',
          endedAt: '2021-12-31'
        }
      ])
    },
    {
      id: 18,
      name: 'Rina Sari',
      work_experiences: JSON.stringify([
        {
          role: 'Frontend engineer',
          company: 'Shopee',
          industry: 'E-commerce',
          startedAt: '2012-01-01',
          endedAt: '2014-12-31'
        },
        {
          role: 'Frontend engineer',
          company: 'Blibli',
          industry: 'E-commerce',
          startedAt: '2015-01-01',
          endedAt: '2017-12-31'
        },
        {
          role: 'Frontend engineer',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2018-01-01',
          endedAt: '2020-12-31'
        }
      ])
    },
    {
      id: 19,
      name: 'Siti Nurhaliza',
      work_experiences: JSON.stringify([
        {
          role: 'UI/UX designer',
          company: 'Traveloka',
          industry: 'Travel',
          startedAt: '2013-01-01',
          endedAt: '2015-12-31'
        },
        {
          role: 'UI/UX designer',
          company: 'Bukalapak',
          industry: 'E-commerce',
          startedAt: '2016-01-01',
          endedAt: '2018-12-31'
        },
        {
          role: 'UI/UX designer',
          company: 'Shopee',
          industry: 'E-commerce',
          startedAt: '2019-01-01',
          endedAt: '2021-12-31'
        }
      ])
    },
    {
      id: 20,
      name: 'Tono Prasetyo',
      work_experiences: JSON.stringify([
        {
          role: 'Backend engineer',
          company: 'Gojek',
          industry: 'Tech Finance',
          startedAt: '2011-01-01',
          endedAt: '2013-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2014-01-01',
          endedAt: '2016-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'Traveloka',
          industry: 'Travel',
          startedAt: '2017-01-01',
          endedAt: '2019-12-31'
        }
      ])
    },
    {
      id: 21,
      name: 'Umar Hasyim',
      work_experiences: JSON.stringify([
        {
          role: 'Backend engineer',
          company: 'OVO',
          industry: 'Fintech',
          startedAt: '2012-01-01',
          endedAt: '2014-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'Dana',
          industry: 'Fintech',
          startedAt: '2015-01-01',
          endedAt: '2017-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'LinkAja',
          industry: 'Fintech',
          startedAt: '2018-01-01',
          endedAt: '2020-12-31'
        }
      ])
    },
    {
      id: 22,
      name: 'Vina Oktaviani',
      work_experiences: JSON.stringify([
        {
          role: 'Backend engineer',
          company: 'Mandiri',
          industry: 'Banking',
          startedAt: '2013-01-01',
          endedAt: '2015-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'BRI',
          industry: 'Banking',
          startedAt: '2016-01-01',
          endedAt: '2018-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'BNI',
          industry: 'Banking',
          startedAt: '2019-01-01',
          endedAt: '2021-12-31'
        }
      ])
    },
    {
      id: 23,
      name: 'Wawan Setiawan',
      work_experiences: JSON.stringify([
        {
          role: 'Backend engineer',
          company: 'Blibli',
          industry: 'E-commerce',
          startedAt: '2012-01-01',
          endedAt: '2014-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'Bukalapak',
          industry: 'E-commerce',
          startedAt: '2015-01-01',
          endedAt: '2017-12-31'
        },
        {
          role: 'Backend engineer',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2018-01-01',
          endedAt: '2020-12-31'
        }
      ])
    },
    {
      id: 24,
      name: 'Xenia Rahma',
      work_experiences: JSON.stringify([
        {
          role: 'Frontend engineer',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2015-01-01',
          endedAt: '2017-12-31'
        },
        {
          role: 'Frontend engineer',
          company: 'Traveloka',
          industry: 'Travel',
          startedAt: '2018-01-01',
          endedAt: '2020-12-31'
        },
        {
          role: 'Frontend engineer',
          company: 'Bukalapak',
          industry: 'E-commerce',
          startedAt: '2021-01-01',
          endedAt: '2023-12-31'
        }
      ])
    },
    {
      id: 25,
      name: 'Yusuf Maulana',
      work_experiences: JSON.stringify([
        {
          role: 'UI/UX designer',
          company: 'Gojek',
          industry: 'Tech Finance',
          startedAt: '2014-01-01',
          endedAt: '2016-12-31'
        },
        {
          role: 'UI/UX designer',
          company: 'Tokopedia',
          industry: 'E-commerce',
          startedAt: '2017-01-01',
          endedAt: '2019-12-31'
        },
        {
          role: 'UI/UX designer',
          company: 'Traveloka',
          industry: 'Travel',
          startedAt: '2020-01-01',
          endedAt: '2022-12-31'
        }
      ])
    }
  ])
  .onConflict('id')
  .merge();
};
