<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;

class DefaultUserSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        try {
            \DB::beginTransaction();

            \DB::table('users')->insertGetId([
                    'first_name' => 'Biying',
                    'last_name' => 'Zhang',
                    'gender' => 'female',
                    'email' => 'vivian9778@gmail.com',
                    'address' => '',
                    'number' => '',
                    'birthday' => '1997-01-07 13:05:26',
            ]);

            \DB::commit();
        } catch (\Exception $e) {
            \DB::rollback();
            dd($e->getLine().':'.$e->getMessage());
        }
    }

}
