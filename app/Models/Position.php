<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;

    public function salary_grade()
    {
        return $this->belongsTo(SalaryGrade::class, 'salary_grade_id')->orderBy('id', 'asc');
    }
}


